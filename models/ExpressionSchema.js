var mongoose = require('mongoose')
var ExpressionSchema = new mongoose.Schema(
    {
        Content : { type : String , required : true},
        Customer : {type: mongoose.Schema.Types.ObjectId, ref: 'User' , required: false},
        Input_time : { type : Date , required : true , default : Date.now }


    }
)
module.exports = mongoose.model('Expression',ExpressionSchema)