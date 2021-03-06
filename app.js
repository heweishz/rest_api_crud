const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')
app.use(cors())
app.use(bodyParser.json())

const router = require('./routes/posts.js')
//middleware
app.use('/', (req, res, next) => {
  console.log('hello remote friend')
  next()
})

app.use('/posts', router)
app.use('/posts/specific', (req, res) => {
  res.send('can i show?')
})
//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log('DB connected')
)

app.listen(3000)
