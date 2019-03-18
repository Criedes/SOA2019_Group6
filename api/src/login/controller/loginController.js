const express = require('express')
const router = express.Router();
const loginService = require('../service/loginService');


router.get('/', function (req, res) {
    res.status(200).json({
        success: true
    });
})

router.post('/', loginService.PostLogin)

module.exports = router;
