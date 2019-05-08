const express = require('express');
const customerService = require('../service/customerService');
const bodyParser = require('body-parser');
const router = express.Router();
const Prometheus = require('prom-client')

const ENV =  process.env.NODE_ENV || 'production';
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

if(ENV === 'production'){
        Prometheus.collectDefaultMetrics({ timeout: 5000 })
}

// GET customer by ID
router.get('/:id', customerService.getCustomerById);
// POST customer information
router.post('/register', customerService.registerCustomer);

if(ENV === 'production'){
    router.get('/prom/metrics', (request, response) => {
        response.set('Content-Type', Prometheus.register.contentType)
        console.log(Prometheus.register)
        response.send(Prometheus.register.metrics())
})
}


module.exports = router;