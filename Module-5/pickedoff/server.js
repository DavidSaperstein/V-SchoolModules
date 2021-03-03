const express = require('express')
const app = express()
const {v4 : uuid } = require('uuid')
const middleware = require('./middle.js')

app.use(express.json())

const classes = [
  {
    title: 'Mage',
    type: 'Ranged'
  }
]

app.use(middleware)

app.get('/classes', (req, res) => {
  res.send(classes)
})

app.listen(9000, () => {
  console.log('Welcome to die')
})
