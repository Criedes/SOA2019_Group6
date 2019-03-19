const express = require('express');
const mechanicService = require('../service/mechanicsService')
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//find mechanics all 
router.get('/find', mechanicService.findMechanic)

//get mechanic information
router.get('/find/:id', mechanicService.findMechanicById)


//get mechanic infomation by shop ' s name
router.get('/find/garage/:shopname', mechanicService.findMechanicByShopName)

//update Status ( change toggle )
router.get('/updatestatus/:id', mechanicService.updateStatusById)

//update counter of customer
router.get('/updatecounter/:id', mechanicService.updateCountById)

module.exports = router;