const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

// environment variables
const keys = require('../config')
// User model
const User = mongoose.model('user')

module.exports = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        const err = new Error("You're not authorized to access this")
        return next(err)
    }

    const token = authorization.replace('Bearer ', '')

    jwt.verify(token, keys.JWT_SECRET_OR_KEY, async (err, { userId }) => {
        if (err) return next(err)
        const user = await User.findById(userId)
        req.user = user
        return next()
    })
}