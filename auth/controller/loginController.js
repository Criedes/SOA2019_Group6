const express = require('express');
const router = express.Router();
const loginService = require('../service/loginService');
const {auth} = require('../middlewares/auth')

router.post('/customer', loginService.authenUser)
router.get('/tester2', auth, (req,res)=>{
    res.send("hello"+ req.user._id)
})

module.exports = router;
