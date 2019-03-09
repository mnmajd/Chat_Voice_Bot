var express = require('express');
var router = express.Router();
var authenticate = require('../config/Authenticate');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('welcome to chatbot_voice bot');
});
router.get('/test',function(req, res, next) {
    res.send('welcome to chatbot_voice bot');
});
module.exports = router;
