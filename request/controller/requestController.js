const express = require('express')
const router = express.Router();
const requestService = require('../service/requestService');

router.put('/:id', requestService.updateStatusById)

module.exports = router;
