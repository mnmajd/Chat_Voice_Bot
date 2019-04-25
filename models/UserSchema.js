var mongoose = require('mongoose')
var passportLocalMongoose = require('passport-local-mongoose');
var offer = require('../models/OfferSchema');

var UserSchema = new mongoose.Schema
(
    {
            FirstName : { type : String , required : true},
            LastName  : { type : String , required: true},
            Adress    : [
                {
                    City : { type : String , required : true},
                    Country : { type : String , required : true},
                    Postal_code : { type : String , required : false},
                    Longitude : { type : Number , required : false},
                    Latitude : { type : Number , required : false},

                }
            ],

            Phone    : { type : Number , required : true},
            Email     : { type : String , required : true},
            CreditAmount     : { type : Number , default:0 ,required:false},
            ActiveOffer :  { type:mongoose.Schema.ObjectId , ref : ' Offer' , required : false}

           /* Is_Admin : { type : Boolean , required : false , default: false}*/

    }
)
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',UserSchema)