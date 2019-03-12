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
    'Hello guys',
);
router.get('/guesslanguage',function(req, res, next) {
    console.log(guess[0]);
});
const { NlpClassifier } = require('node-nlp');

const classifier = new NlpClassifier({ language: 'fr' });

const startClassify = async function(a, b) {
    classifier.add('Bonjour', 'greet');
    classifier.add('bonne nuit', 'greet');
    classifier.add('Bonsoir', 'greet');
    classifier.add("J'ai perdu mes clés", 'keys');
    classifier.add('Je ne trouve pas mes clés', 'keys');
    classifier.add('Je ne me souviens pas où sont mes clés', 'keys');
    await classifier.train();
    const classifications = classifier.getClassifications('où sont mes clés');
    const classification = classifier.getBestClassification('où sont mes clés');
    console.log(classifications);
    console.log(classification);
}
router.get('/guesslanguage2',function(req, res, next) {
    startClassify();

});
module.exports = router;
