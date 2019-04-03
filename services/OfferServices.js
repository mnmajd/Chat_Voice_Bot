/**
 * Created by Emir on 03/04/2019.
 */
var offer = require('../models/OfferSchema');
const responseHandler = require('../services/Responsehandler');

exports.submitoffer=(req,res,next)=>{
    const newoffer={
        Content : req.body.Content,
        Title : req.body.Title,
        CodeActivation : req.body.CodeActivation,
        Price : req.body.Price,
        Type: req.body.Type,
        Duration: req.body.Duration
    }
    offer.create(newoffer).then(
        of=>{
            responseHandler.resHandler(true, of, "sucessful offer submission", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))

}
exports.updateoffer=(req,res,next)=> {
    offer.findOneAndUpdate({Title: req.params.title}, req.body).then(
        of => {
            responseHandler.resHandler(true, of, "sucessful offer updated", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}
exports.deleteoffer=(req,res,next)=> {
    offer.findOneAndRemove({Title: req.params.title}, req.body).then(
        of => {
            responseHandler.resHandler(true, of, "sucessful offer deleted", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}
exports.getOfferById=(req,res,next)=> {
    offer.findById(req.params.id).then(
        of => {
            responseHandler.resHandler(true, of, "offer detected", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}


