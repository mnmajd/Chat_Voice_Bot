var mongoose = require('mongoose')
var OfferSchema = new mongoose.Schema(
    {
        Content :  { type : String , required : true},
        Title :  { type : String , required : true},
        CodeActivation :  { type : String , required : true},
        Price :  { type : Number , required : true},
        Type :  { type : String , required : false},
        Duration :  { type : String , required : true},

    }
)
module.exports = mongoose.model('Offer',OfferSchema)