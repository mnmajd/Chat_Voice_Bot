var mongoose = require('mongoose')
var AfterSalesShema = new mongoose.Schema(
    {
        Content :  { type : String , required : true}
    }
)
module.exports = mongoose.model('After_Sales',AfterSalesShema)