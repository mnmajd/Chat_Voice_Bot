var express = require('express');
var router = express.Router();
var passport = require('passport');
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
                Number :req.body.Number ,
                Street : req.body.Street,
                City : req.body.City,
                Country : req.body.Country,
                Postal_code : req.body.Postal_code,
                Longitude : req.body.Longitude,
                Latitude : req.body.Latitude,
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

module.exports = router;
