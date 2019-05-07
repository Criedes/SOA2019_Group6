const express = require('express');
const mechanicService = require('../service/mechanicsService')
const router = express.Router();
const bodyParser = require('body-parser');
const Prometheus = require('prom-client')

Prometheus.collectDefaultMetrics({ timeout: 5000 })

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

router.get('/metrics', (request, response) => {
    response.set('Content-Type', Prometheus.register.contentType)
    console.log(Prometheus.register)
    response.send(Prometheus.register.metrics())
})


module.exports = router;