const express = require('express');
const router = express.Router();

const scrapeCtrl = require('../controllers/getArticleBooks');

router.post('/search', scrapeCtrl.scrapeArticle);

module.exports = router;
