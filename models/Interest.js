const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InterestsSchema = new Schema({
    Interest: String,
})

const Interest = mongoose.model('Interests', InterestsSchema)

module.exports = Interest