const axios = require('axios');
const cheerio = require('cheerio');

const scrapIsbn = ($) => {
  const bdis = $('bdi');
  const isbnData = [];

  bdis.each((index, el) => {
    const urlString = `https://openlibrary.org/isbn/${$(el).text()}.json`;
    isbnData.push(urlString);
  });

  return isbnData;
};

const getBookData = async (url) => {
  try {
    const response = await axios({ url });
    if (
      response.status === 200 &&
      response.data.title &&
      response.data.subtitle &&
      response.data.authors &&
      response.data.key &&
      response.data.covers
    ) {
      const authors = await Promise.all(
        response.data.authors.map((author) => {
          const url = `https://openlibrary.org${author.key}.json`;
          return axios.get(url).then((response) => response.data.name);
        })
      );

      const uniqueId = response.data.key + Date.now();

      return {
        id: uniqueId,
        title: response.data.title,
        subtitle: response.data.subtitle,
        authors,
        key: `https://openlibrary.org${response.data.key}`,
        covers: `https://covers.openlibrary.org/b/id/${response.data.covers[0]}-M.jpg`,
      };
    }
    return null;
  } catch (error) {
    console.error(`Error occured: ${error}`);
    return null;
  }
};

const getBooks = async (isbnData) => {
  const bookData = await Promise.all(
    isbnData.map(async (url) => {
      const data = await getBookData(url);
      return data;
    })
  );
  return bookData.filter((data) => data !== null);
};

const scrapeArticle = async (req, res, next) => {
  console.log(req.body.search);
  try {
    const scrappedIsbn = await axios(req.body.search);
    if (scrappedIsbn.status === 200) {
      const body = scrappedIsbn.data;
      const $ = cheerio.load(body);
      const isbnData = scrapIsbn($);
      const books = await getBooks(isbnData);
      console.log(books);
      res.send(books);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { scrapeArticle };
