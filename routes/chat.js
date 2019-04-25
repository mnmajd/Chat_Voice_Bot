var express = require('express');
var router = express.Router();
const { SentimentAnalyzer,SentimentManager } = require('node-nlp');
const translate = require('@vitalets/google-translate-api');
var ServiceServices=require('../services/ServicesServices')
var Request = require("request");
var jwtDecode = require('jwt-decode');
var User = require('../models/UserSchema');
var Offer = require('../models/OfferSchema');
var AfterSales=require('../models/After_SalesSchema');

var UserConnected;
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
    if(req.body.queryResult.action=="register.account" && req.body.queryResult.allRequiredParamsPresent==true){
        Request.post({
            "headers": { "content-type": "application/json" },
            "url": "http://localhost:3001/users/signup",
            "body": JSON.stringify({
                "username": req.body.queryResult.parameters.username,
                "password": req.body.queryResult.parameters.password,
                "FirstName": req.body.queryResult.parameters.firstname,
                "LastName": req.body.queryResult.parameters.lastname,
                "Email": req.body.queryResult.parameters.email,
                "Phone": req.body.queryResult.parameters.phone,
                "City": req.body.queryResult.parameters.city,
                "Country": req.body.queryResult.parameters.country



            })
        }, (error, response, body) => {
            if(error) {
                console.log(error);
                console.log("not nice");
            }
            console.log(response);
            let state = JSON.parse(response.body);
              if (state.success==true) {
                res.json(
                    {
                        'fulfillmentText': "You have been registered"
                     
                    }
                                );
              }else{
                res.json(
                    {
                        'fulfillmentText': "Error"
                     
                    }
                                );
      
  
      }
    })
  
      }
    if(req.body.queryResult.action=="make.login"){
        Request.post({
            "headers": { "content-type": "application/json" },
            "url": "http://localhost:3001/users/login",
            "body": JSON.stringify({
                "username": req.body.queryResult.parameters.username,
                "password": req.body.queryResult.parameters.password
                

            })
        }, (error, response, body) => {
            if(error) {
                console.log(error);
                console.log("not nice");
            }
            console.log("lol");
            if (response.body=="Unauthorized") {
              res.json(
                  {
                      'fulfillmentText': "Error"
                   
                  }
                              );
            }else{
                var pre_token = JSON.parse(response.body);
                var token = pre_token.token;
                var decoded= jwtDecode(token);
             userid=decoded._id;
             User.findById(userid).then(user=>{
                UserConnected=user;

             })

              res.json(
                  {
                      'fulfillmentText': "You are connnected"
                   
                  }
                              );
      
  
      }
    })
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
           /* Request.get("http://localhost:3001/services", (error, response, body) => {
                if(error) {
                    return console.dir(error);
                    
                }
             dat=JSON.parse(body);
                data = [];

                dat.data.forEach(function(lol) {
                 data.push({res:lol.Title})
                  
              });
              
            });*/
            if (UserConnected === undefined) {
                res.json(
                    {
                        'fulfillmentText': 
                        JSON.stringify([
                            {res:"Get Credit Amount"},
                            {res:"Go back to assistance"}
                        ])
                    }
                );   
            }else{
                res.json(
                    {
                        'fulfillmentText': 
                        JSON.stringify([
                            {res:"Charge Unit"},
                            {res:"Get Credit Amount"},
                            {res:"Activate offer"},
                            {res:"Go back to assistance"}
                        ])
                    }
                );
            }

           


            
            
            
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

                if(req.body.queryResult.action=="charge.unit" && req.body.queryResult.allRequiredParamsPresent==true){
                    Request.post({
                        "headers": { "content-type": "application/json" },
                        "url": "http://localhost:3001/cards/charge",
                        "body": JSON.stringify({
                            "userid": UserConnected._id,
                            "cardcode": req.body.queryResult.parameters.cardcode
                            
            
            
            
                        })
                    }, (error, response, body) => {
                        if(error) {
                            console.log(error);
                            console.log("not nice");
                        }
                        data=JSON.parse(response.body);
                        if (data.success==true && data.message=="card charged") {
                            res.json(
                                {
                                    'fulfillmentText': "Your unit card has been charged."
                                }
                            ); 
                            
                        }
                        else if(data.success==false && data.message=="Card expired"){
                            res.json(
                                {
                                    'fulfillmentText': "This unit card is expired"
                                }
                            ); 
                        }
                        else{
                            res.json(
                                {
                                    'fulfillmentText': "Unit card not found, please check your code and retry with charging unit card."
                                }
                            );  
                        }
                        //let state = JSON.parse(response.body);
                      
                })
                }

                if(req.body.queryResult.action=="activate.offer" && req.body.queryResult.allRequiredParamsPresent==true){
                    Request.get("http://localhost:3001/offers/byname/"+req.body.queryResult.parameters.offer, (error, response, body) => {
                                if(error) {
                                    res.json(
                                        {
                                            'fulfillmentText': "Please check the name of the offer"
                                        }
                                    );
                                    
                                }
                                dat=JSON.parse(body);
                                if(dat.data==null){
                                    res.json(
                                        {
                                            'fulfillmentText': "Please check the name of the offer"
                                        }
                                    ); 
                                }
                                else{
                           Request.put({
                            "headers": { "content-type": "application/json" },
                            "url": "http://localhost:3001/services/activateoffer/"+UserConnected._id+"/"+dat.data._id,
                          
                        }, (error, response, body) => {
                            if(error) {
                                console.log(error);
                                console.log("not nice");
                            }
                            res.json(
                                {
                                    'fulfillmentText': "Offer activated succefully"
                                }
                            );
                        });}
                           
                        
                        
                        });
             
                    
                            
                        }
                       
                
                  
                    
                    

                if(req.body.queryResult.action=="get.credit"){

                    if (UserConnected === undefined) {
                        res.json(
                            {
                                'fulfillmentText': "Please login to consult your Credit"
                            }
                        );
                
                    }
                    else{

                   
                    Request.get("http://localhost:3001/services/credit/"+UserConnected._id, (error, response, body) => {
                        if(error) {
                            return console.dir(error);
                            
                        }
                      
                            res.json(
                                {
                                    'fulfillmentText': "Your credit amount is "+ JSON.parse(response.body).data+" DT"
                                }
                            ); 
                     
                        
                           

                    
                    });

                }
                    
                    }


                if(req.body.queryResult.action=="communication.offers"){
  
             console.log(req);
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
                                    'fulfillmentText': "The service "+dat.data.Title+"<br>Content: "+dat.data.Content+"<br>Price :"+dat.data.Price+"<br>Activation Code: "+dat.data.CodeActivation
                                }
                            );
                            });
                                   
                  
                            }
                if(req.body.queryResult.action=="support.global"){
  
                    res.json(
                        {
                            'fulfillmentText': JSON.stringify([
                                {res:"Repair"},
                                {res:"Configuration"},
                                {res:"Go back to assistance"}
                            ])
                        }
                    );
                    
                    }


                    if(req.body.queryResult.action=="support.repair"){
  
                        console.log(req);
                    Request.get("http://localhost:3001/afterSales/all/Repair", (error, response, body) => {
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
                            'fulfillmentText': data.join()+"<br> Please write (I want details about 'the name of the support')."
                        }
                    );
                    });
                        
                        }

                        if(req.body.queryResult.action=="support.configuration"){
  
                            console.log(req);
                        Request.get("http://localhost:3001/afterSales/all/Configuration", (error, response, body) => {
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
                                'fulfillmentText': data.join()+"<br> Please write (I want details about 'the name of the support')."
                            }
                        );
                        });
                            
                            }

                            if(req.body.queryResult.action=="details.support"){
  
                                Request.get("http://localhost:3001/afterSales/byname/"+req.body.queryResult.parameters.support, (error, response, body) => {
                                    if(error) {
                                        return console.dir(error);
                                        
                                    }
                                 dat=JSON.parse(body);
                                    data = [];
                                    if (dat.data==null) {
                                        res.json(
                                            {
                                                'fulfillmentText': "Please check the name of the support"
                                            }
                                        );   
                                    }else{
                                        console.log(dat);
                                        res.json(
                                          {
                                              'fulfillmentText': "Support :"+dat.data.Title+"<br>"+dat.data.Content
                                          }
                                      );
                                    }
                               
                                
                                });
                                       
                      
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
                                    'fulfillmentText': "Claimed"
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
