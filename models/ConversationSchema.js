var mongoose = require('mongoose')
var ConversationSchema = new mongoose.Schema(
    {
        Date : { type : Date , required : true , default : Date.now},
        Customer : {type: mongoose.Schema.Types.ObjectId, ref: 'User' , required: false},
        Input : { type : mongoose.Schema.Types.ObjectId , ref: 'Expression' , required: true },
        Response : { type:mongoose.Schema.Types.ObjectId , ref : ' Response' , required : true}

    }

)
module.exports = mongoose.model('Conversation',ConversationSchema)