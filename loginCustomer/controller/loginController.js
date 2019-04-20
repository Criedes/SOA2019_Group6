const express = require('express');
const router = express.Router();
const loginService = require('../service/loginService');

router.post('/customer', loginService.authenUser)

module.exports = router;
