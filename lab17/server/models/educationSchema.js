const mongoose = require('mongoose')

const educationSchema = new mongoose.Schema({
    degree: {
        type: String,
        required: true
    },
    university: {
        type: String,
        required: true
    },
    grad_year: {
        type: String,
        required: true
    }
})

const Education = mongoose.model('Education', educationSchema)

module.exports = Education