const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/crud-store', 
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  },
  () => console.log('Connected to the DB')
)

app.use('/inventory', require('./routes/inventory.js'))

app.listen(9000, () => {
  console.log("I'm a server!")
})