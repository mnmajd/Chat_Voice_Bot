var mongoose = require('mongoose')
var OfferSchema = new mongoose.Schema(
    {
        Content :  { type : String , required : true},
        Title :  { type : String , required : true},
        CodeActivation :  { type : String , required : true},
        Price :  { type : String , required : true},
        Type :  { type : String , required : true},
        Duration :  { type : String , required : true},

    }
)
module.exports = mongoose.model('Offer',OfferSchema)