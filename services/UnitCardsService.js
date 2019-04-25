var unit = require('../models/UnitCardsSchema');
var user = require('../models/UserSchema');


const responseHandler = require('../services/Responsehandler');

function makecode() {
    var text = "";
    var possible = "0123456789";
  
    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
exports.submitService=(req,res,next)=>{
    const newservice={
        Amount : req.body.Amount,
        Code:makecode()
    }
    unit.create(newservice).then(
        of=>{
            responseHandler.resHandler(true, of, "sucessful unit submission", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))

}
exports.updateservice=(req,res,next)=> {
    unit.findOneAndUpdate({Title: req.params.title}, req.body).then(
        of => {
            responseHandler.resHandler(true, of, "sucessful service updated", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}
exports.deleteservice=(req,res,next)=> {
    unit.findOneAndRemove({Title: req.params.title}, req.body).then(
        of => {
            responseHandler.resHandler(true, of, "sucessful service deleted", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}
exports.getCardbyId=(req,res,next)=> {
    unit.findById(req.params.id).then(
        of => {
            responseHandler.resHandler(true, of, "card detected", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}

exports.getAllCards=(req,res,next)=> {
    unit.find().then(
        of => {
            responseHandler.resHandler(true, of, "all cards detected", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}

exports.expireCard=(req,res,next)=> {
    unit.findOneAndUpdate({_id: req.params.cardid}, { Expired : 'true' }).then(
        of => {
            responseHandler.resHandler(true, of, "unit card expired", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}


exports.chargeCard=(req,res,next)=> {
    unit.findOne({Code : req.body.cardcode}).exec(function (err, u) {
        
         if(u==null){
            responseHandler.resHandler(false, null, `card not found`, res, 500);  
        }
        else if (u.Expired) {
            responseHandler.resHandler(false, null, `Card expired`, res, 500);
        }
        
        else{
            user.findOneAndUpdate({_id : req.body.userid},{$inc: { CreditAmount: u.Amount } }).then(
                of => {
                    unit.findOneAndUpdate({_id: u.id}, { Expired : 'true' }).exec(function (err, u){
                        if (err) {
                            responseHandler.resHandler(false, null, `error : ${err}`, res, 500);   
                        }
                    })
                    responseHandler.resHandler(true, of, "card charged", res, 200)
                }
            ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
        }
        

    });

    
}