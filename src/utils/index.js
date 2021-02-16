const jwt = require('jsonwebtoken')

// environment variables
const keys = require('../config')

exports.createToken = (payload) => jwt.sign(payload, keys.JWT_SECRET_OR_KEY)

exports.createError = (message, code) => {
    const error = new Error(message)
    error.code = code || 500
    return error
}
