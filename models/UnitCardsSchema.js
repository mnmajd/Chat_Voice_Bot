var mongoose = require('mongoose')
var UnitCardsSchema = new mongoose.Schema(
    {
        
        Code :  { type : String , required : true},
        Amount :  { type : Number , required : true},
        Expired :  { type: Boolean ,  default:'false'}


    }
)
module.exports = mongoose.model('UnitCards',UnitCardsSchema)