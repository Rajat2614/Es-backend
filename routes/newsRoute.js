const express = require('express');
const{ getNews } = require('../controllers/newsController');
const router = express.Router();

router.route('/getNews/').get(getNews);
router.route('/getNews/:pageNo/:noOfPages').get(getNews);

module.exports = router;
