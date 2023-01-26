const cheerio = require('cheerio');
const axios = require('axios');
const { index } = require('cheerio/lib/api/traversing');

const scrapperFnc = ($) => {
  const bdis = $('bdi');
  const isbnData = [];

  bdis.each((index, el) => {
    const code = {};

    code.name = ` https://openlibrary.org/isbn/${$(el).text()}.json`;
    isbnData.push(code);
  });
};

exports.scrapeArticle = async (req, res, next) => {
  let scrappingUrl = req.body.search;

  try {
    const scrappedIsbn = await axios(scrappingUrl);
    if (res.statusCode === 200) {
      const body = scrappedIsbn.data;
      const $ = cheerio.load(body);
      scrapperFnc($);
    }
  } catch (error) {
    console.log(error);
  }
};
