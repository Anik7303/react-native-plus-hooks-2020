const express = require('express')
const mongoose = require('mongoose')

// models
const User = mongoose.model('user')

// utitlity functions
const { createToken } = require('../utils')

const router = express.Router()

router.post('/signup', async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            const err = new Error('Both email and password is required')
            err.statusCode = 422
            throw err
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            const err = new Error('Email is already in use')
            err.statusCode = 422
            throw err
        }

        const user = new User({ email, password })
        await user.save()

        const token = createToken({ userId: user._id })

        res.status(201).json({ token })
    } catch (err) {
        return next(err)
    }
})

router.post('/signin', async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            const err = new Error('Both email and password is required')
            err.statusCode = 422
            throw err
        }

        const user = await User.findOne({ email })
        if (!user) {
            const err = new Error('User not found')
            err.statusCode = 404
            throw err
        }

        const isMatch = await user.comparePassword(password)
        if (!isMatch) {
            const err = new Error('Wrong password')
            err.statusCode = 422
            throw err
        }

        const token = createToken({ userId: user._id })
        res.status(200).json({ token })
    } catch (err) {
        return next(err)
    }
})

module.exports = router
