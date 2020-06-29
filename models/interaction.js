const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InteractionsSchema = new Schema({
    cat_id: String,
    cats_likes: [String],
    cats_unlikes: [String],
    cats_matches: [String]
})

const Interaction = mongoose.model('Interactions', InteractionsSchema)

module.exports = Interaction