/**
 * Created by Emir on 03/04/2019.
 */
var express = require('express');
var router = express.Router();
var OfferServices=require('../services/OfferServices')

router.post('/', OfferServices.submitoffer);
router.put('/:title',OfferServices.updateoffer);
router.delete('/:title',OfferServices.deleteoffer);
router.get('/',OfferServices.getAllOffers);
router.get('/types',OfferServices.getTypesOfOffers);
router.get('/max',OfferServices.getMaxPriceOffer);
router.get('/max/:type/:duration',OfferServices.getMaxPriceOfferByPeriodAndType);
router.get('/all/:type/:duration',OfferServices.getOffersByPeriodAndType);
router.get('/:id',OfferServices.getOfferById);

module.exports = router;

