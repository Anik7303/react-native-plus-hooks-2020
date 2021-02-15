const path = require('path')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: path.join(__dirname, '..', '.env') })
}
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// database mondels initialization
require('./models')

// environment variables
const keys = require('./config')

// mongodb server configurations
const dbConfigs = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    // useFindAndModify: false,
}

mongoose.connect(keys.MONGO_URI, dbConfigs)
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'))
mongoose.connection.on('error', (err) => console.error({ db: err }))

// routes
const { testRoutes } = require('./routes')

// server configuration start
const app = express()
app.use(cors())
app.use(express.json())

app.use(testRoutes)

app.listen(keys.PORT, () => console.log(`server running on port ${keys.PORT}`))
