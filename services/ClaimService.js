var claim = require('../models/ClaimSchema');
var user = require('../models/UserSchema');
const responseHandler = require('../services/Responsehandler');
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
    apiKey: "a4bb3e5b",
    apiSecret: "gc9AzS7WFYRMGBoX"
});
const from = '21624390420';
const to = '21624390420';
const text = 'Your claim has been successful sent to admin';

var data = [];

var dataTreated = [];
var dataNotTreated = [];
var dataAllTreated = [];

var dataVeryImportant = [];
var datamoderatelyImportant = [];
var dataImportant = [];
var dataDegre = [];

var dateClaims=[];
var somme = 0;




exports.getClaimById = (req, res, next) => {
    claim.findById(req.params.idClaim).then(
        claim => {
            responseHandler.resHandler(true, claim, "claim find", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}

exports.getAllClaims=(req,res,next)=> {
    claim.find().then(
        claims => {
            responseHandler.resHandler(true, claims, " all claims detected", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}

exports.sendClaim = (req, res, next) => {
    const newclaim = {
        Title: req.body.Title,
        Content: req.body.Content,
        Type: req.body.Type,
        Degre: req.body.Degre,
        Date: req.body.Date,
        Treated: req.body.Treated,
        State: req.body.State,
         //User:req.user._id
         User: '5cc081c7024b9c6608e26cd7'
    }
    claim.create(newclaim).then(
        claim => {
            // nexmo.message.sendSms(from, to, text, (err, responseData) => {
            //     if (err) {
            //         console.log(err);
            //     } else {
            //         if (responseData.messages[0]['status'] === "0") {
            //             console.log("Message sent successfully.");
            //         } else {
            //             console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            //         }
            //     }
            // })
            responseHandler.resHandler(true, claim, "sucessful claim sended", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}

exports.treatClaim = (req, res, next) => {
    howToChange = req.body.change;
    claim.findById(req.params.idClaim).then(
        claim => {
            if (howToChange === 'treated') {
                claim.Treated = true;
                claim.State = 'Treated';
            }
            else if(howToChange === 'inprogress')
            {
                claim.Treated = false;
                claim.State = 'In Progress';
            }
            else {
                claim.Treated = false;
                claim.State = 'Not Treated';
            }
            // claim.User = '5c878c3fe8bc74164ca40aa5'
             claim.save()
            responseHandler.resHandler(true, claim, "sucessful claim updated", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}


exports.followUpClaim = (req, res, next) => {
    claim.find({User: '5c878c3fe8bc74164ca40aa5'}).then(
        claims => {

            // claims.forEach(function (claim) {
            //     data.push({Title: claim.Title, Content: claim.Content, Type: claim.Type, State: claim.State});
            // });
            responseHandler.resHandler(true, claims, "claims detected", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}

exports.findAllClaimsByTreated = (req, res, next) => {
    claim.find().then(
        claims => {
            claims.forEach(function (claim) {
                if (claim.State === 'Treated') {
                    dataTreated.push({
                        Id:claim._id,
                        Title: claim.Title,
                        Content: claim.Content,
                        Type: claim.Type,
                        State: claim.State,
                        Degre: claim.Degre
                    });
                }
                else {
                    dataNotTreated.push({
                        Id:claim._id,
                        Title: claim.Title,
                        Content: claim.Content,
                        Type: claim.Type,
                        State: claim.State,
                        Degre: claim.Degre
                    });
                }
            });
            dataAllTreated = dataTreated.concat(dataNotTreated);
            responseHandler.resHandler(true, dataAllTreated, "claims detected", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}


exports.findAllClaimsByDegre = (req, res, next) => {
    claim.find().then(
        claims => {
            claims.forEach(function (claim) {
                if (claim.Degre === 'very important') {
                    dataVeryImportant.push({
                        Title: claim.Title,
                        Content: claim.Content,
                        Type: claim.Type,
                        State: claim.State,
                        Degre: claim.Degre
                    });
                }
                else if (claim.Degre === 'important') {
                    dataImportant.push({
                        Title: claim.Title,
                        Content: claim.Content,
                        Type: claim.Type,
                        State: claim.State,
                        Degre: claim.Degre
                    });
                }
                else {
                    datamoderatelyImportant.push({
                        Title: claim.Title,
                        Content: claim.Content,
                        Type: claim.Type,
                        State: claim.State,
                        Degre: claim.Degre
                    });
                }
            });
            dataDegre = dataVeryImportant.concat(dataImportant , datamoderatelyImportant);
            responseHandler.resHandler(true, dataDegre, "claims detected", res, 200)
        }
    ).catch(error => responseHandler.resHandler(false, null, `error : ${error}`, res, 500))
}


// const aggregatorOpts = [{
//     $unwind: "$claims"
// },
//     {
//         $group: {
//             _id: "$claims.Date",
//             count: { $sum: 1 }
//         }
//     }
// ]
exports.getclaimsByMonth = (req, res, next) => {
const aggregatorOpts = [{
    $unwind: "$claims"
},
    {
        $group: {
            _id: "$claims.Date",
            count: { $sum: 1 }
        }
    }
]

claim.aggregate(aggregatorOpts).exec(
    claims => {
        console.log(aggregatorOpts)
    }
)
}