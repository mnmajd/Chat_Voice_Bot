var mongoose = require('mongoose')
var AfterSalesShema = new mongoose.Schema(
    {
        Title : { type : String , required : true},
        Content :  { type : String , required : true},
        Type : { type : String , required: true}

    }
)
module.exports = mongoose.model('After_Sales',AfterSalesShema)