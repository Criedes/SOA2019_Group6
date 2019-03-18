// Variables
const router = require('express').Router();
const bodyParser = require('body-parser');
const mock_model = require('../model/mock_model.js');

// Middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Routes & HTTP Methods
router.get('/:id', (req, res) => {
    res.json(mock_model);
});
router.post('/register', (req, res) => {
    res.send({ status : "Registered"});
});

module.exports = router;