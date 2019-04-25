var express = require('express');
var router = express.Router();
var AfterSalesService=require('../services/AfterSalesServices');

router.post('/', AfterSalesService.AddAfterSalesService);
router.get('/', AfterSalesService.GetAfterSalesService);
router.get('/:id', AfterSalesService.GetAfterSalesServiceById);
router.put('/:title',AfterSalesService.updateaftersales);
router.get('/all/:type',AfterSalesService.getAfterSalesbyType);
router.get('/byname/:title',AfterSalesService.getSavByName);


module.exports = router;
