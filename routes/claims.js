var express = require('express');
var router = express.Router();
var ClaimService=require('../services/ClaimService');


router.post('/:idUser', ClaimService.sendClaim);

module.exports = router;