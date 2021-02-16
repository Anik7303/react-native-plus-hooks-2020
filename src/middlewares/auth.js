const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

// environment variables
const keys = require('../config')
// User model
const User = mongoose.model('user')
// utility functions
const { createError } = require('../utils')

module.exports = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        const err = createError("You're not authorized to access this", 401)
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
