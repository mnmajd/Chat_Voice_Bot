var mongoose = require('mongoose')
var ClaimSchema = new mongoose.Schema(
    {
        Content :  { type : String , required : true}
    }
)
module.exports = mongoose.model('Claim',ClaimSchema )