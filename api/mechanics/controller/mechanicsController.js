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

router.post('/search', mechanicService.queryMechanicByName)

//get mechanic infomation by shop ' s name
router.get('/find/garage/:shopname', mechanicService.findMechanicByShopName)

//update Status ( change toggle )
router.put('/updatestatus/:id', mechanicService.updateStatusById)

//update counter of customer
router.put('/updatecounter/:id', mechanicService.updateCountById)

//register new mechanic
router.post('/register', mechanicService.registerMechanic)

module.exports = router;