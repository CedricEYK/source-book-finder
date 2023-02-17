const express = require('express');
const router = express.Router();

const mainControllers = require('../controllers/mainControllers');
const scrapeCtrl = require('../controllers/getArticleBooks');

router.get('/', mainControllers.getMainPage);

//router.post('/search', mainControllers.postSearch);

router.post('/search', scrapeCtrl.scrapeArticle);

module.exports = router;
