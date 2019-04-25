var service = require('../models/ServiceSchema');
var user = require('../models/UserSchema');

const responseHandler = require('../services/Responsehandler');

exports.submitService=(req,res,next)=>{
    const newservice={
        Title : req.body.Title,
        Description : req.body.Description,
        Code : req.body.Code,
        Type : req.body.Type,
        Offer: req.body.Offer,
    }
    service.create(newservice).then(
        of=>{
            responseHandler.resHandler(true, of, "sucessful service submission", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))

}
exports.updateservice=(req,res,next)=> {
    service.findOneAndUpdate({Title: req.params.title}, req.body).then(
        of => {
            responseHandler.resHandler(true, of, "sucessful service updated", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}
exports.deleteservice=(req,res,next)=> {
    service.findOneAndRemove({Title: req.params.title}, req.body).then(
        of => {
            responseHandler.resHandler(true, of, "sucessful service deleted", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}
exports.getServicebyId=(req,res,next)=> {
    service.findById(req.params.id).then(
        of => {
            responseHandler.resHandler(true, of, "service detected", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}

exports.getAllServices=(req,res,next)=> {
    service.find().then(
        of => {
            responseHandler.resHandler(true, of, "all services detected", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}

exports.activateOffer=(req,res,next)=> {
    user.findOneAndUpdate({_id: req.params.userid}, { ActiveOffer : req.params.offerid }).then(
        of => {
            responseHandler.resHandler(true, of, "offer activated succeffuly", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}

exports.getCreditAmount=(req,res,next)=> {
    user.findById(req.params.id).then(
        of => {
            responseHandler.resHandler(true, of.CreditAmount, "amount activated succeffuly", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}