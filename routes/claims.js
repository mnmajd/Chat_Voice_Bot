var express = require('express');
var router = express.Router();
var ClaimService=require('../services/ClaimService');


router.post('/', ClaimService.sendClaim);
router.put('/:idClaim', ClaimService.treatClaim);


module.exports = router;