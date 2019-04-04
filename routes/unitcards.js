var express = require('express');
var router = express.Router();
var CardsServices=require('../services/UnitCardsService')

router.post('/', CardsServices.submitService);
router.get('/', CardsServices.getAllCards);
router.put('/:cardid', CardsServices.expireCard);
router.post('/charge/', CardsServices.chargeCard);






module.exports = router;
