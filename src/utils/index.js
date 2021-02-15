const jwt = require('jsonwebtoken')

// environment variables
const keys = require('../config')

//exports.createToken = (payload) =>
//    jwt.sign(payload, keys.JWT_SECRET_OR_KEY, {
//        expiresIn: '30 days',
//    })

exports.createToken = (payload) =>
    jwt.sign(payload, keys.JWT_SECRET_OR_KEY)

