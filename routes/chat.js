var express = require('express');
var router = express.Router();
const { SentimentAnalyzer,SentimentManager } = require('node-nlp');
const translate = require('@vitalets/google-translate-api');
var ServiceServices=require('../services/ServicesServices')
var Request = require("request");


var response1=null;
var n=0;
var chatid="";
var ScoreConversation=0;
var sum=0;
router.get('/', function(req, res, next) {
    //get ip of client
    /*var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
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
    }*/

    res.render('index.ejs', { title: 'botUI_api.ai' });
    console.log(res);
  });

  router.post('/', function(req, res, next) {
      n=n+1;
      console.log("n="+n);
    const sentiment = new SentimentManager();
    sentiment.process('en', req.body.queryResult.queryText).then(result =>
    {console.log("sentiment="+result.score);
        sum+=result.score;
        ScoreConversation=sum/n}
    );
       console.log("sum="+sum);
        console.log("scorefinal="+ScoreConversation);

      console.log("hedha req.body="+JSON.stringify(req.body));

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


    console.log(chatid);

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
            Request.get("http://localhost:3001/services", (error, response, body) => {
                if(error) {
                    return console.dir(error);
                    
                }
             dat=JSON.parse(body);
                data = [];

                dat.data.forEach(function(lol) {
                 data.push({res:lol.Title})
                  
              });
              res.json(
                {
                    'fulfillmentText': JSON.stringify(data)
                    /*JSON.stringify([
                        {res:"Charge Unit"},
                        {res:"Services Codes"},
                        {res:"Go back to assistance"}
                    ])*/
                }
            );
            });


            
            
            
            }

            if(req.body.queryResult.action=="offers.global"){
  
             

                res.json(
                    {
                        'fulfillmentText': JSON.stringify([
                            {res:"Communication Offers"},
                            {res:"Internet Offers"},
                            {res:"Go back to assistance"}
                        ])
                    }
                );
                
                }


                if(req.body.queryResult.action=="communication.offers"){
  
             
                    Request.get("http://localhost:3001/offers/all/communication", (error, response, body) => {
                        if(error) {
                            return console.dir(error);
                            
                        }
                     dat=JSON.parse(body);
                        data = [];
        
                        dat.data.forEach(function(lol) {
                         data.push(lol.Title);
                          
                      });
                      
                      res.json(
                        {
                            'fulfillmentText': data.join()+"<br> Please write (I want details about 'the name of the offer')."
                        }
                    );
                    });
        
                    
                    }

                    if(req.body.queryResult.action=="internet.offers"){
  
             
                        Request.get("http://localhost:3001/offers/all/internet", (error, response, body) => {
                            if(error) {
                                return console.dir(error);
                                
                            }
                         dat=JSON.parse(body);
                            data = [];
            
                            dat.data.forEach(function(lol) {
                             data.push(lol.Title);
                              
                          });
                          
                          res.json(
                            {
                                'fulfillmentText': data.join()+"<br> Please write (I want details about 'the name of the offer')."
                            }
                        );
                        });
            
                        
                        }




                        if(req.body.queryResult.action=="details.offer"){
  
                            Request.get("http://localhost:3001/offers/byname/"+req.body.queryResult.parameters.any, (error, response, body) => {
                                if(error) {
                                    return console.dir(error);
                                    
                                }
                             dat=JSON.parse(body);
                                data = [];
                
                           
                              console.log(dat);
                              res.json(
                                {
                                    'fulfillmentText': "The service"+dat.data.Title+"<br>"+dat.data.Content
                                }
                            );
                            });
                                   
                  
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

                    if(req.body.queryResult.action=="claim.make" && req.body.queryResult.allRequiredParamsPresent==true){
  
                        console.log(req.body.queryResult.parameters.title);
                    
                        Request.post({
                            "headers": { "content-type": "application/json" },
                            "url": "http://localhost:3001/claims",
                            "body": JSON.stringify({
                                "Title": req.body.queryResult.parameters.title,
                                "Content": req.body.queryResult.parameters.content,
                                "Type": req.body.queryResult.parameters.type,
                                "Degre": req.body.queryResult.parameters.degre
        
                            })
                        }, (error, response, body) => {
                            if(error) {
                                console.log(error);
                                console.log("not nice");
                            }
                            console.log("lol");
                            res.json(
                                {
                                    'fulfillmentText': "Yes baby"
                                }
                            );
                        });
                    
              
                        }


                        if(req.body.queryResult.action=="details.claim" && req.body.queryResult.allRequiredParamsPresent==true){
  
                            Request.get("http://localhost:3001/claims/getById/"+req.body.queryResult.parameters.claimid, (error, response, body) => {
                if(error) {
                    return console.dir(error);
                    
                }
                let state = JSON.parse(response.body);
              if (state.success==false) {
                res.json(
                    {
                        'fulfillmentText': "Your claim is not found"
                     
                    }
                                );
              }else{
                res.json(
                    {
                        'fulfillmentText': "Your claim is "+state.data.State
                     
                    }
                                );
              }
            });

                        
                  
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

      if(n==1){
          Request.post({
              "headers": { "content-type": "application/json" },
              "url": "http://localhost:3001/history",
          }, (error, response, body) => {
              console.log(JSON.parse(response.body).data._id);
              chatid=JSON.parse(response.body).data._id
              if(error) {
                  console.log(error);
                  console.log("not nice");
              }
          });
      }else{
          Request.put({
              "headers": { "content-type": "application/json" },
              "url": "http://localhost:3001/history/"+chatid+"/addScore",
              "body": JSON.stringify({
                  "Score": ScoreConversation
              })
          }, (error, response, body) => {
              if(error) {
                  console.log(error);
                  console.log("not nice");
              }
          });
          Request.put({
              "headers": { "content-type": "application/json" },
              "url": "http://localhost:3001/history/"+chatid+"/addMsg",
              "body": JSON.stringify({
                  "ClientMsg":req.body.queryResult.queryText,
                  "ServerMsg":JSON.stringify(req.body.queryResult.fulfillmentText)
              })
          }, (error, response, body) => {
              if(error) {
                  console.log(error);
                  console.log("not nice");
              }
          });
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
