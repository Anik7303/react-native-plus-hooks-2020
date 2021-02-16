const express = require('express')
const mongoose = require('mongoose')

// database models
const Track = mongoose.model('track')

// middlewares
const { requireAuth } = require('../middlewares')
// utility functions
const { createError } = require('../utils')

const router = express.Router()

router.use(requireAuth)

router.get('/', async (req, res, next) => {
    try {
        const tracks = await Track.find({ userId: req.user._id })
        res.status(200).json(tracks)
    } catch (err) {
        const error = createError(err.message)
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { name, locations } = req.body
        if (!name || !locations || locations.length === 0) {
            throw createError(
                "You must provide a 'name' and a list of 'locations'",
                422
            )
        }

        const track = new Track({ name, locations, userId: req.user._id })
        await track.save()

        res.status(201).json(track)
    } catch (err) {
        const error = createError(err.message)
        next(error)
    }
})

router.delete('/:trackId', async (req, res, next) => {
    try {
        const { trackId } = req.params

        const track = await Track.findById(trackId)
        if (!track) {
            throw createError('Track not found', 404)
        }

        await track.remove()
        res.status(200).json({ message: `${trackId} successfully deleted` })
    } catch (err) {
        const error = createError(err.message)
        next(error)
    }
})

module.exports = router
