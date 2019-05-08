const fs = require('fs');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const customerSchema = require('../model/customerSchema')
const mechanicSchema = require('../model/mechanicSchema')
const jwt = require('jsonwebtoken')
const config = require('config')
const Prometheus = require('prom-client')


const counter = new Prometheus.Counter({
    name: 'authen_request_total',
    help: 'metric_help'
  });

exports.authenUser = async (req, res) => {
    counter.inc();
    const { error } = validateUser(req.body)
    if (error) {
        console.log(req.body.username)
        console.log(req.body.password)
        console.log(error)
        return res.status(400).send(error.details[0].message)
    }

    const username = req.body.username;
    const password = req.body.password;
    const user = await customerSchema.findOne({ username: req.body.username })
    if (!user) return res.status(400).json({ msg: "invalid email or password" })
    const validPassword = await bcrypt.compare(req.body.password, user.password)

    if (!validPassword) return res.status(400).json({ msg: "Password incorrect" })
    const payload = {
        _id: user._id,
        username: user.username,
        role: 'customer'
    }

    jwt.sign(payload, config.get('jwtPrivateKey'), { expiresIn: 360000 }, (err, token) => {
        // console.log(token)
        res.header('Authorization', token).status(201).json({ token })
    })
}

exports.authenMechanic = async (req, res) => {
    counter.inc();
    const { error } = validateUser(req.body)
    if (error) {
        console.log(req.body.username)
        console.log(req.body.password)
        console.log(error)
        return res.status(400).send(error.details[0].message)
    }

    const username = req.body.username;
    const password = req.body.password;
    const user = await mechanicSchema.findOne({ username: req.body.username })
    if (!user) return res.status(400).json({ msg: "invalid email or password" })
    const validPassword = await bcrypt.compare(req.body.password, user.password)

    if (!validPassword) return res.status(400).json({ msg: "Password incorrect" })
    const payload = {
        _id: user._id,
        username: user.username,
        role: 'mechanic'
    }

    jwt.sign(payload, config.get('jwtPrivateKey'), { expiresIn: 360000 }, (err, token) => {
        // console.log(payload)
        res.header('Authorization', token).status(201).json({ token })
    })
}
function validateUser(req) {
    const schemaTestObj = {
        username: Joi.string().min(5).max(255).required(),
        password: Joi.string().min(5).max(255).required()
    }
    return Joi.validate(req, schemaTestObj)
}