var mongoose = require('mongoose')
var ServiceSchema = new mongoose.Schema(
    {
        Content :  { type : String , required : true}
    }
)
module.exports = mongoose.model('Service',ServiceSchema)