const cheerio = require('cheerio');
const axios = require('axios');
const { index } = require('cheerio/lib/api/traversing');

//const isbnData = [];

const scrapperFnc = ($) => {
  const bdis = $('bdi');
  isbnData = [];

  bdis.each((index, el) => {
    const code = {};

    code.name = ` https://openlibrary.org/isbn/${$(el).text()}.json`;
    isbnData.push(code);
  });
  return isbnData;
};

const getBooks = async (isbnData) => {
  try {
    for (let i = 0; i < isbnData.length; i++) {
      const url = isbnData[i].name;
      books = await axios(url);
      console.log(books.data);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.scrapeArticle = async (req, res, next) => {
  let scrappingUrl = req.body.search;

  try {
    const scrappedIsbn = await axios(scrappingUrl);
    if (res.statusCode === 200) {
      const body = scrappedIsbn.data;
      const $ = cheerio.load(body);
      scrapperFnc($);
      getBooks(isbnData);
    }
  } catch (error) {
    console.log(error);
  }
};
