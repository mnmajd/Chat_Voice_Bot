var express = require('express');
var router = express.Router();
var AfterSalesService=require('../services/AfterSalesServices');

router.post('/', AfterSalesService.AddAfterSalesService);
router.get('/', AfterSalesService.GetAfterSalesService);
router.get('/:id', AfterSalesService.GetAfterSalesServiceById);
module.exports = router;
