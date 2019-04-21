const express = require('express');
const customerService = require('../service/customerService');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended : true }));
router.use(bodyParser.json());

// GET customer by ID
router.get('/:id', customerService.getCustomerById);

// POST customer information
router.post('/register', customerService.registerCustomer);

module.exports = router;