var claim = require('../models/ClaimSchema');
var user = require('../models/UserSchema');
const responseHandler = require('../services/Responsehandler');
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
    apiKey: "a4bb3e5b",
    apiSecret: "gc9AzS7WFYRMGBoX"
});
const from = '21624390420';
const to = '21624390420';
const text = 'Your claim has been successful sent to admin';

exports.sendClaim=(req,res,next)=>{
    const newclaim={
        Title : req.body.Title,
        Content : req.body.Content,
        Type : req.body.Type,
        Degre : req.body.Degre,
        Date: req.body.Date,
        Treated: req.body.Treated,
        User: req.params.idUser
    }
    claim.create(newclaim).then(
        of=>{
            nexmo.message.sendSms(from, to, text, (err, responseData) => {
                if (err) {
                    console.log(err);
                } else {
                    if(responseData.messages[0]['status'] === "0") {
                        console.log("Message sent successfully.");
                    } else {
                        console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
                    }
                }
            })
            responseHandler.resHandler(true, of, "sucessful claim sended", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))}