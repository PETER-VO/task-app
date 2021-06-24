const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0) {
                throw Error('Age must be positive number')
            }
        }
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}

