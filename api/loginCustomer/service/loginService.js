const fs = require('fs');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const customerSchema = require('../model/customerSchema')
// const loginSchema = require('../model/loginSchema')


exports.authenUser = async (req, res) => {

    const { error } = validateUser(req.body)

    if (error) return res.status(400).send(error.details[0].message)
    const username = req.body.username;
    const password = req.body.password;
    const user = await customerSchema.findOne({ username: req.body.username })
    if (!user) return res.status(400).send("Invalid email or password")

    const validPassword = await bcrypt.compare(req.body.password, user.password)

    if (!validPassword) return res.status(400).send("Invalid email or password")

    res.json(true)

}


function validateUser(req) {
    const schemaTestObj = {
        username: Joi.string().min(5).max(255).required(),
        password: Joi.string().min(5).max(255).required()
    }

    return Joi.validate(req, schemaTestObj)
}