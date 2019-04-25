var AfterSales = require('../models/After_SalesSchema');
const responseHandler = require('../services/Responsehandler');

exports.AddAfterSalesService = (req, res, next) => {
    const  newAfterSales  = {
        Title : req.body.Title ,
        Content :  req.body.Content ,
        Type : 'Repair'
    }
    AfterSales.create(newAfterSales).then(NewAfterSaleService => {

        responseHandler.resHandler(true, NewAfterSaleService, "sucecefull aff", res, 200)
                        }
                        ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))

}
exports.GetAfterSalesService = (req, res, next) => {
    const  newAfterSales  = {
        Title : req.body.Title ,
        Content :  req.body.Content ,
        Type : req.body.Type
    }
    AfterSales.find().then(AfterSaleService => {

            responseHandler.resHandler(true,AfterSaleService, "sucecefull aff", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))

}

exports.GetAfterSalesServiceById = (req, res, next) => {

    AfterSales.findById(req.params.id).then(AfterSaleService => {

            responseHandler.resHandler(true,AfterSaleService, "sucecefull aff", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))

}

exports.updateaftersales=(req,res,next)=> {
    AfterSales.findOneAndUpdate({Title: req.params.title}, req.body).then(
        as => {
            responseHandler.resHandler(true, as, "sucessful after sales updated", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}

exports.getAfterSalesByType = (req, res, next) => {
    AfterSales.aggregate(
        [
            {
                $group : {
                    _id : { Type: { $Type: "$Type" }},
                }
            }
        ]
    ).then( afterS => {
        responseHandler.resHandler(true, afterS, "sucessful after sales updated", res, 200)
    })
}