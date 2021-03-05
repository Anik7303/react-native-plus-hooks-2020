const express = require('express')
const mongoose = require('mongoose')

// models
const User = mongoose.model('user')

// utitlity functions
const { createToken, createError } = require('../utils')

const router = express.Router()

router.post('/signup', async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password)
            throw createError('Both email and password is required', 422)

        const existingUser = await User.findOne({ email })
        if (existingUser) throw createError('Email is already in use', 422)

        const user = new User({ email, password })
        await user.save()

        const token = createToken({ userId: user._id })

        res.status(201).json({ token })
    } catch (err) {
        next(err)
    }
})

router.post('/signin', async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password)
            throw createError('Both email and password is required', 422)

        const user = await User.findOne({ email })
        if (!user) throw createError('User not found', 404)

        const isMatch = await user.comparePassword(password)
        if (!isMatch) throw createError('Wrong password', 422)

        const token = createToken({ userId: user._id })
        res.status(200).json({ token })
    } catch (err) {
        next(err)
    }
})

module.exports = router
