var mongoose = require('mongoose')
var ServiceSchema = new mongoose.Schema(
    {
        Title :  { type : String , required : true},
        Description :  { type : String , required : false},
        Code :  { type : String , required : true},
        Type :  { type : String , required : false},
        Offer :  { type:mongoose.Schema.ObjectId , ref : ' Offer' , required : false}


    }
)
module.exports = mongoose.model('Service',ServiceSchema)