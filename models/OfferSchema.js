var mongoose = require('mongoose')
var OfferSchema = new mongoose.Schema(
    {
        Content :  { type : String , required : false},
        Title :  { type : String , required : false},
        CodeActivation :  { type : String , required : false},
        Price :  { type : Number , required : false},
        Type :  { type : String , required : false},
        Duration :  { type : String , required : false},

    }
)
module.exports = mongoose.model('Offer',OfferSchema)