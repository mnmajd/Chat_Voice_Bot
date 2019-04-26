/**
 * Created by Emir on 24/04/2019.
 */
var history = require('../models/HistorySchema');
const responseHandler = require('../services/Responsehandler');
exports.submithistory=(req,res,next)=>{
    const newhistory=new history(req.body);
    history.create(newhistory).then(
        of=>{
            responseHandler.resHandler(true, of, "sucessful history submission", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))

}
exports.AddMsgs=(req,res,next)=>{
    history.findByIdAndUpdate(req.params.id, {new: false}, (err, of) => {
        if (err) {
            responseHandler.resHandler(false, null, `error : ${error}`, res, 500)
        }
        else
        {
            of.ClientMsg.push(req.body.ClientMsg);
            of.ServerMsg.push(req.body.ServerMsg);
            of.save();
            responseHandler.resHandler(true, of, "sucessful Msg added", res, 200)
        }

    })
}
exports.AddScore=(req,res,next)=> {
    history.findByIdAndUpdate(req.params.id, req.body,{new: true}, (err, of) => {
        if (err) {
            responseHandler.resHandler(false, null, `error : ${error}`, res, 500)
        }
        else
        {
            responseHandler.resHandler(true, of, "sucessful Score added", res, 200)
        }

    })
}
exports.getHistory=(req,res,next)=> {
    history.find().then(
        history => {
            responseHandler.resHandler(true, history, " history detected", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}
exports.getScoreConversation=(req,res,next)=> {
    nbgood=0;
    nbsad=0;
    nbneutre=0;
    history.find().then(
        history => {
            history.map(his=>
            {
             if(his.Score >0){
                 nbgood=nbgood+1;
             }
             else if(his.Score <0)
             {
                 nbsad=nbsad+1;
             }
             else if(his.Score ==0)
             {
                 nbneutre=nbneutre+1;
             }
            })
            resultat={"goodconversation":nbgood,"badconversation":nbsad,"neutre":nbneutre}
            responseHandler.resHandler(true, resultat, " history detected", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}
exports.getScoreConversationByTime=(req,res,next)=> {
    nbgoodday=0;
    nbgoodnight=0;
    nbsadnight=0;
    nbsadday=0;
    history.find().then(
        history => {
            history.map(his=>
            {
                if(his.Score >0 && his.Date.getHours()<12){
                    nbgoodday=nbgoodday+1;
                }
                else if(his.Score >0 && his.Date.getHours()>12)
                {
                    nbgoodnight=nbgoodnight+1;
                }
                else if(his.Score <0 && his.Date.getHours()<12)
                {
                    nbsadday=nbsadday+1;
                }
                else if(his.Score <0 && his.Date.getHours()>12)
                {
                    nbsadnight=nbsadnight+1;
                }
            })
            resultat={"goodday":nbgoodday,"goodnight":nbgoodnight,"sadday":nbsadday,"sadnight":nbsadnight}
            responseHandler.resHandler(true, resultat, " history detected", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}





