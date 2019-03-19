const express = require('express')
const router = express.Router();
const loginService = require('../service/loginService');

router.get('/', loginService.getLogin)

router.post('/', loginService.PostLogin)

module.exports = router;
