const express = require('express')
const app = express()
const cors = require('cors')

const catsRoutes = require('./routes/cats')
const interestRoutes = require('./routes/interest')

require('./connection/mongoConnection')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send('Hola Mundo'))

app.use('/cats', catsRoutes)
app.use('/interest', interestRoutes)

app.listen(5001, () => console.log('Server running'))
