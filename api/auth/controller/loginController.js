const express = require('express');
const router = express.Router();
const loginService = require('../service/loginService');
const {auth} = require('../middlewares/auth')
const customerSchema = require('../model/customerSchema')
const mechanicSchema = require('../model/mechanicSchema')

router.get('/authentication/customer', auth , async (req,res) => {
    try{
        const customer = await customerSchema.findById(req.user._id).select('-password')
        res.status(200).json(customer)
        
    }catch(e){
        console.log(e.message)
        res.status(500).send("server error")
    }
})

router.get('/authentication/mechanic', auth , async(req,res)=>{
    try{
        const mechanic = await mechanicSchema.findById(req.user._id).select('-password')
        res.status(200).json(mechanic)
    }catch(e){
        console.log(e.message)
        res.status(500).send("server error")
    }
})
router.post('/customer', loginService.authenUser)
router.post('/mechanic', loginService.authenMechanic)

//test check priority.
router.get('/tester2', auth, (req,res)=>{
    console.log(JSON.stringify(req.user))
    res.send("hello"+ req.user._id)
})

module.exports = router;
