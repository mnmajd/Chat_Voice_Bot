/**
 * Created by Emir on 03/04/2019.
 */
var offer = require('../models/OfferSchema');
const responseHandler = require('../services/Responsehandler');
var user = require('../models/UserSchema');

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

exports.getOfferByName=(req,res,next)=> {
    offer.findOne({Title:req.params.title}).then(
        of => {
            responseHandler.resHandler(true, of, "offer detected", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}
exports.getAllOffers=(req,res,next)=> {
    offer.find().then(
        of => {
            responseHandler.resHandler(true, of, " all offers detected", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}
exports.getTypesOfOffers=(req,res,next)=> {
    offer.find().distinct("Type").then(
        types => {
            responseHandler.resHandler(true,types, " all types detected", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}
exports.getOffersByPeriodAndType=(req,res,next)=> {
    offer.find({Type:req.params.type}).then(
        offers => {
            responseHandler.resHandler(true, offers, "offers by period detected", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}
exports.getMaxPriceOffer=(req,res,next)=> {
    offer.find().sort('-Price').then(
        doc => {
            responseHandler.resHandler(true,  doc[0].Price, "max detected", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}
exports.getMaxPriceOfferByPeriodAndType=(req,res,next)=> {
    offer.find({Type:req.params.type,Duration:req.params.duration}).select("Price").sort({"Price" : -1}).limit(1).then(
        doc => {
            responseHandler.resHandler(true,  doc[0].Price, "max detected", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}
exports.getBeneficeByOffer=(req,res,next)=> {
    var b=0;
    user.count({ActiveOffer:req.params.offerid}).then(
        us => {
            b=us*req.params.price;
            responseHandler.resHandler(true, b, "max detected", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}
exports.CountUserByOffer=(req,res,next)=> {

    user.count({ActiveOffer:req.params.offerid}).then(
        nb => {
            console.log(nb)
            responseHandler.resHandler(true,  nb, "max detected", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}

