const express = require('express');
const router = express.Router();
const loginService = require('../service/loginService');
const {auth} = require('../middlewares/auth')

router.post('/customer', loginService.authenUser)

//test check priority.
router.get('/tester2', auth, (req,res)=>{
    console.log(req.user)
    res.send("hello"+ req.user._id)
})

module.exports = router;
