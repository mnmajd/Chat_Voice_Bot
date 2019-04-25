var express = require('express');
var router = express.Router();
var OfferServices=require('../services/ServicesServices')

router.post('/', OfferServices.submitService);
router.put('/:title',OfferServices.updateservice);
router.delete('/:title',OfferServices.deleteservice);
router.get('/:id',OfferServices.getServicebyId);
router.get('/',OfferServices.getAllServices);
router.get('/credit/:id',OfferServices.getCreditAmount);


router.put('/activateoffer/:userid/:offerid',OfferServices.activateOffer);

module.exports = router;
