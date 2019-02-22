var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('welcome to chatbot_voice bot');
});

module.exports = router;
