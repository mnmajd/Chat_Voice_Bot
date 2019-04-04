var offer = require('../models/ServiceSchema');
const responseHandler = require('../services/Responsehandler');

exports.submitService=(req,res,next)=>{
    const newservice={
        Title : req.body.Title,
        Description : req.body.Description,
        Code : req.body.Code,
        Type : req.body.Type,
        Offer: req.body.Offer,
    }
    offer.create(newservice).then(
        of=>{
            responseHandler.resHandler(true, of, "sucessful service submission", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))

}
exports.updateservice=(req,res,next)=> {
    offer.findOneAndUpdate({Title: req.params.title}, req.body).then(
        of => {
            responseHandler.resHandler(true, of, "sucessful service updated", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}
exports.deleteservice=(req,res,next)=> {
    offer.findOneAndRemove({Title: req.params.title}, req.body).then(
        of => {
            responseHandler.resHandler(true, of, "sucessful service deleted", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}
exports.getServicebyId=(req,res,next)=> {
    offer.findById(req.params.id).then(
        of => {
            responseHandler.resHandler(true, of, "service detected", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}

