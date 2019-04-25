/**
 * Created by Emir on 24/04/2019.
 */
var mongoose = require('mongoose')
var HistorySchema = new mongoose.Schema(
    {
        ClientMsg :  [{ type : String , required : false}],
        ServerMsg :  [{ type : String , required : false}],
        Date : {type : Date, default:Date.now() },
        Score:{type : String , required : false,default:"0"}

    }
)
module.exports = mongoose.model('History',HistorySchema)