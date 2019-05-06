const jwt = require('jsonwebtoken')
const config = require('config')

exports.auth = (req, res, next) => {
    const token = req.header('Authorization')
    if (!token) {
        return res.status(401).json()
    } else {
        const accessToken = token.match(/Bearer (.*)/)[1]
        try {
            const decode = jwt.verify(accessToken, config.get('jwtPrivateKey'))
            req.user = decode
            next()
        } catch (e) {
            return res.status(400).json('invalid token')
        }
        next();
    }
    next();
}