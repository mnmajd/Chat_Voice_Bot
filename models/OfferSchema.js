var mongoose = require('mongoose')
var OfferSchema = new mongoose.Schema(
    {
        Content :  { type : String , required : true}
    }
)
module.exports = mongoose.model('Offer',OfferSchema)