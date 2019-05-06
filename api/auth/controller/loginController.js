const express = require('express');
const router = express.Router();
const loginService = require('../service/loginService');
const { auth } = require('../middlewares/auth')
const customerSchema = require('../model/customerSchema')
const mechanicSchema = require('../model/mechanicSchema')
const Prometheus = require('prom-client')

Prometheus.collectDefaultMetrics({ timeout: 5000 })

router.get('/authentication', auth, async (req, res) => {
    try {
        let user2 = ''
        if (req.user.role == "customer") {
            user2 = await customerSchema.findById(req.user._id).select('-password')
        } else {
            user2 = await mechanicSchema.findById(req.user._id).select('-password')
        }
        res.status(200).json(user2)
    } catch (e) {
        console.log(e.message)
        res.status(500).send("server error")
    }
})


  

router.post('/customer',loginService.authenUser)
router.post('/mechanic', loginService.authenMechanic, counter.inc())

router.get('/metrics', (request, response) => {
    response.set('Content-Type', Prometheus.register.contentType)
    console.log(Prometheus.register)
    response.send(Prometheus.register.metrics())
})

//test check priority.
router.get('/tester2', auth, (req, res) => {
    console.log(JSON.stringify(req.user))
    res.send("hello" + req.user._id)
})
module.exports = router;
