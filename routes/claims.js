var express = require('express');
var router = express.Router();
var ClaimService=require('../services/ClaimService');


router.post('/', ClaimService.sendClaim);
router.put('/:idClaim', ClaimService.treatClaim);
router.put('/treatedClaim/:idClaim', ClaimService.treatedClaim);
router.put('/notTreatedClaim/:idClaim', ClaimService.NotTreatedClaim);
router.put('/inProgressClaim/:idClaim', ClaimService.InProgressClaim);
router.get('/', ClaimService.followUpClaim);
router.get('/getById/:idClaim', ClaimService.getClaimById);
router.get('/allTT', ClaimService.findAllClaimsByTreated);
router.get('/allDegre', ClaimService.findAllClaimsByDegre);
router.get('/getByMonth', ClaimService.getclaimsByMonth);
module.exports = router;