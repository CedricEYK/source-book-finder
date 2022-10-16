const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express');

//* Load the main page
exports.getMainPage = (req, res, next) => {
  res.render('index.hbs');
};

exports.postSearch = async (req, res, next) => {
  let url = req.body.search;
  let isbns = [];
  //* Scrape all the isbns from a wikipedia page and push into
  //* the isbns array
  try {
    const scrappedIsbns = await axios(url);
    if (res.statusCode == 200) {
      const $ = cheerio.load(scrappedIsbns.data);
      $.parseHTML();
      const myel = $('bdi').each((i, el) => {
        const item = $(el).text();
        item.toString();
        isbns.push(item);
      });
    }
    //* Concatonate the extracted isbns from the array with the
    //* url string
    const urlndIsbn = isbns.map((el) => {
      return 'https://openlibrary.org/isbn/' + el + '.json';
    });
    //* Array that holds the list of bookObjects that we get
    //* from the axios requests on the url + the isbn
    let booksFound = [];
    //* Looping thorough every url and Getting the data needed
    //* assigning their values to the bookObject keys
    //* and pushing them into the booksFound array
    for (let i in urlndIsbn) {
      try {
        let olObj = await axios(urlndIsbn[i]);
        if (res.statusCode == 200) {
          let bookObj = {
            bookTitle: '',
            bookKey: '',
          };
          (bookObj.bookTitle = olObj.data.title),
            (bookObj.bookKey = `https://openlibrary.org ${olObj.data.key}`);
          booksFound.push(bookObj);
        }
      } catch (error) {
        if (error.response) {
          console.log(error.response.statusText);
        } else if (error.request) {
          console.log(error.request);
        } else {
          next();
        }
      }
    }
    //? Turn into JSON object for later
    let jsonBookList = JSON.stringify(booksFound);
    //JSON.parse(jsonBookList);
    console.log(jsonBookList);
    //console.log(booksFound);
    // TODO: Fix this
    res.send(jsonBookList);
    // res.render('index.hbs', {
    //   booksAvailable: booksFound,
    // });
  } catch (err) {
    console.log(err);
  }
};
