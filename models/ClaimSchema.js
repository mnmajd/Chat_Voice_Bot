var mongoose = require('mongoose')
var User = require('../models/UserSchema');
var ClaimSchema = new mongoose.Schema(
    {
        Title : { type : String , required : true},
        Content :  { type : String , required : true},
        Type : {type : String},
        Degre : {type : String },
        Date : {type : Date , default:Date.now()},
        Treated : {type : Boolean , default: 'false'},
        User: {type: mongoose.Schema.ObjectId,  required: true,index: true , ref: 'User'}
    }
)
module.exports = mongoose.model('Claim',ClaimSchema )