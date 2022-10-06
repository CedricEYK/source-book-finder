const express = require('express');
const router = express.Router();

const mainControllers = require('../controllers/mainControllers');

router.get('/', mainControllers.getMainPage);

router.post('/search', mainControllers.postSearch);

module.exports = router;
