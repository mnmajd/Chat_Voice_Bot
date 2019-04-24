var express = require('express');
var router = express.Router();
var GeolocationService = require('../services/GeolocationService');

router.get('/',GeolocationService.Geolocation);

module.exports = router;