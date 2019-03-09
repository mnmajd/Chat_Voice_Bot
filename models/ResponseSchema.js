var mongoose = require('mongoose')
var ResponseSchema = new mongoose.Schema(
    {
        Claim : {type:mongoose.Schema.Types.ObjectId , ref : ' Claim' , required : false },
        Service : { type:mongoose.Schema.Types.ObjectId , ref : ' Service' , required : false},
        After_Sales : { type:mongoose.Schema.Types.ObjectId , ref : ' After_Sales' , required : false},
        Offer :  { type:mongoose.Schema.Types.ObjectId , ref : ' Offer' , required : false}
    }
)