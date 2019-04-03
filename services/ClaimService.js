var claim = require('../models/ClaimSchema');
const responseHandler = require('../services/Responsehandler');
var user = require('../models/UserSchema');


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
            responseHandler.resHandler(true, of, "sucessful claim sended", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))}