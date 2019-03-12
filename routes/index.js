var express = require('express');
var router = express.Router();
var authenticate = require('../config/Authenticate');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('welcome to chatbot_voice bot');
});

const { Language } = require('node-nlp');

const language = new Language();
const guess = language.guess(
    'je parle',
);
router.get('/guesslanguage',function(req, res, next) {
    console.log(guess[0]);
});
module.exports = router;
