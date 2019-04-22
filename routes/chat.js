var express = require('express');
var router = express.Router();
const { SentimentAnalyzer,SentimentManager } = require('node-nlp');
const translate = require('@vitalets/google-translate-api');


var response1=null;

router.get('/', function(req, res, next) {
    //get ip of client
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ip);
    var cookie = req.cookies.cookieNames;
    if (cookie === undefined)
    {
        // no: set a new cookie
        var randomNumber=Math.random().toString();
        randomNumber=randomNumber.substring(2,randomNumber.length);
        res.cookie('cookieNames',randomNumber, { maxAge: 900000, httpOnly: true });
        console.log('cookie created successfully');
        console.log(cookie);
    }
    else
    {
        // yes, cookie was already present
        console.log('cookie exists', cookie);
    }
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
  console.log(req);
    res.json(
        {
            'fulfillmentText': JSON.stringify([
                {res:"Need assistance"},
                {res:"Register"},
                {res:"Login"},
                {res:"Continue as guest"}
            ])
        }
    );
    
    }
    if(req.body.queryResult.action=="need.assistance"){
  
        res.json(
            {
                'fulfillmentText': JSON.stringify([
                    {res:"Offers"},
                    {res:"Services"},
                    {res:"Support"},
                    {res:"Claims"}
                ])
            }
        );
        
        }

        if(req.body.queryResult.action=="services.global"){
  
            res.json(
                {
                    'fulfillmentText': JSON.stringify([
                        {res:"Charge Unit"},
                        {res:"Services Codes"},
                        {res:"Go back to assistance"}
                    ])
                }
            );
            
            }

            if(req.body.queryResult.action=="offers.global"){
  
                res.json(
                    {
                        'fulfillmentText': JSON.stringify([
                            {res:"Particular Offers"},
                            {res:"Entreprise Offers"},
                            {res:"Go back to assistance"}
                        ])
                    }
                );
                
                }

                if(req.body.queryResult.action=="support.global"){
  
                    res.json(
                        {
                            'fulfillmentText': JSON.stringify([
                                {res:"Internet Problem"},
                                {res:"Communication Problem"},
                                {res:"Other Problem"},
                                {res:"Go back to assistance"}
                            ])
                        }
                    );
                    
                    }


                    if(req.body.queryResult.action=="claim.global"){
  
                        res.json(
                            {
                                'fulfillmentText': JSON.stringify([
                                    {res:"Make a claim"},
                                    {res:"My claim details"},
                                    {res:"Go back to assistance"}
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
