var createError = require('http-errors');
var express = require('express');
var passport = require('passport')
var path = require('path');
var mongoose = require('mongoose')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var config = require('./config/DbConf');
const url = config.mongoUrl;
mongoose.connect(url)
var socket = require('./config/sock');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var offersRouter = require('./routes/offers');
var claimsRouter = require('./routes/claims');
var servicesRouter = require('./routes/services');
var cardsRouter = require('./routes/unitcards');
var AfterSalesRouter = require('./routes/aftersales');
var chatRouter = require('./routes/chat');
var geolocationRouter = require('./services/GeolocationService');
var historyRouter=require('./routes/history');


var leafletRouter = require('./services/LeafletService');
var app = express();




app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.use(passport.initialize());
// app.use(passport.session());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

///////// Connected user ///////////////
var session = require("express-session"),
    bodyParser = require("body-parser");
app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
///////// Connected user ///////////////
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/offers', offersRouter);
app.use('/claims', claimsRouter);
app.use('/services', servicesRouter);
app.use('/cards', cardsRouter);
app.use('/afterSales',AfterSalesRouter );
app.use('/geolocation', geolocationRouter);
app.use('/leaflet', leafletRouter);
app.use('/history', historyRouter);

app.use('/chat', chatRouter);
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});




// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

socket.conn();
socket.fromClient();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
