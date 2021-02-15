const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pointSchema = new Schema({
    timestamp: Number,
    coords: {
        latitude: {
            type: Number,
            required: true,
        },
        longitude: {
            type: Number,
            required: true,
        },
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number,
    },
})

const trackSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    name: {
        type: String,
        default: '',
    },
    locations: [pointSchema],
})

mongoose.model('track', trackSchema)
