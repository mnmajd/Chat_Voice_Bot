var express = require('express');
var router = express.Router();
const { SentimentAnalyzer,SentimentManager } = require('node-nlp');
const translate = require('@vitalets/google-translate-api');


var response1=null;

router.get('/', function(req, res, next) {
    res.render('index.ejs', { title: 'botUI_api.ai' });
    console.log(res);
  });

  router.post('/', function(req, res, next) {
    const sentiment = new SentimentManager();
    sentiment
        .process('en', req.body.queryResult.queryText)
        .then(result => console.log(result.score));
console.log(JSON.stringify(req.body));

    /*translate(req.body.queryResult.queryText, {to: 'en'}).then(res1 => {
    console.log(res1.from.language.iso);
    console.log(res1.text);
    res.json(
        {
            'fulfillmentText': res1.text  
        }
    );

}).catch(err => {
    console.error(err);
});
*/



if(req.body.queryResult.action=="input.welcome"){
  
    res.json(
        {
            'fulfillmentText': JSON.stringify([
                {res:"Register"},
                {res:"Continue as guest"}
            ])
        }
    );
    
    }

  });


  router.post('/translate', (req, res) => {
    var q = req.body.q;
    console.log(q);
  var options = { method: 'POST',
  url: 'https://translation.googleapis.com/language/translate/v2',
  form: 
   { key: process.env.TRANSLATE,
     q: q,
     target: 'en' } };
    request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    res.send(body);
    });
})

module.exports = router;
