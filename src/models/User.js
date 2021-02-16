const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
})

userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        try {
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(user.password, salt)
            user.password = hash
        } catch (err) {
            return next(err)
        }
    }
    next()
})

userSchema.methods.comparePassword = function (candidatePassword) {
    const user = this
    return new Promise(async (resolve, reject) => {
        try {
            const isMatch = await bcrypt.compare(
                candidatePassword,
                user.password
            )
            resolve(isMatch)
        } catch (err) {
            reject(err)
        }
    })
}

mongoose.model('user', userSchema)