var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwtDecode = require('jwt-decode');
const ipstack = require('ipstack');
var User = require('../models/UserSchema')
var authenticate = require('../config/Authenticate');
LocalStrategy = require('passport-local').Strategy;

router.post('/signup', (req, res, next) => {
    User.register(new User({
            username: req.body.username ,
            FirstName: req.body.FirstName,
            LastName  : req.body.LastName,
            Email :req.body.Email,
            Phone :req.body.Phone,
            Adress : {
                City : req.body.City,
                Country : req.body.Country,
                Postal_code : req.body.Postal_code,
            }
        }),
        req.body.password, (err, user) => {
            if(err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.json({err: err});
            }
            else {
                passport.authenticate('local')(req, res, () => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({success: true, status: 'Registration Successful!'});
                });
            }
        });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    var token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, token: token, status: 'You are successfully logged in!'});
});
router.get('/logout', function(req, res) {
    req.logout();
    res.status(200).json({
        status: 'Logout successful!'
    });
});
router.get('/list' , function (req,res) {
     User.find().then( users => {
         res.send(users)
     }).catch(err => res.send(err))
   // var token = req.body.token || req.query.token || req.headers['x-access-token'] ||  req.headers['authorization'];
    //var decoded = jwtDecode(token);
    //res.send(decoded._id)

})
router.get('/list/:id' ,function (req,res) {
    User.findById(req.params.id).then(user=> {
        res.send(user)

    } ).catch(err => { res.send(err)})

})
router.get('/getlocation/:id' ,function (req,res) {
    ipstack(req.params.id,"9ec19080da758fddc2f0d59183044b8f",(err, response) => {
        res.send(response)
    })
})

router.put('/delete/:id' ,function (req,res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}).then( todo => {
        res.send("succesful")
    }).catch(err => { res.send(err)})

})
router.get('/verify' ,authenticate.verifyOrdinaryUser,function (req ,res) {
    res.send("you are authorized")
})

module.exports = router;
