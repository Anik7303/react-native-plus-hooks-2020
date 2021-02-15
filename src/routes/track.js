const express = require('express')
const mongoose = require('mongoose')

// database models
const Track = mongoose.model('track')

// middlewares
const { requireAuth } = require('../middlewares')

const router = express.Router()

router.use(requireAuth)

router.get('/', async (req, res, next) => {
    try {
        const tracks = await Track.find({ userId: req.user._id })
        res.status(200).json(tracks)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { name, locations } = req.body
        if (!name || !locations || locations.length === 0) {
            const err = new Error(
                `You must provide a 'name' and a list of 'locations'`
            )
            err.statusCode = 422
            throw err
        }

        const track = new Track({ name, locations, userId: req.user._id })
        await track.save()

        res.status(201).json(track)
    } catch (err) {
        next(err)
    }
})

router.delete('/:trackId', async (req, res, next) => {
    try {
        const { trackId } = req.params

        const track = await Track.findById(trackId)
        if (!track) {
            const err = new Error('Track not found')
            err.statusCode = 404
            throw err
        }

        await track.remove()
        res.status(200).json({ message: `${trackId} successfully deleted` })
    } catch (err) {
        next(err)
    }
})

module.exports = router
