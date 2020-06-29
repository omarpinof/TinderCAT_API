const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/db_tindercat', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => console.error('Error connecting'))
db.once('open', () => console.log('Connection opened'))

module.exports = db
