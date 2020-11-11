const express = require('express')
const app = express()
const { v4: uuid } = require('uuid')

app.use(express.json())

const bounties = [
  {
    firstName: 'Anakin',
    lastName: 'Skywalker',
    living: true,
    bountyAmount: 200,
    type: 'Jedi',
    _id: uuid()
  }
]

app.get('/bounties', (req, res) => {
  res.send(bounties)
})

app.post('/bounties', (req, res) => {
  const newBounty = req.body
  newBounty._id = uuid()
  bounties.push(newBounty)
  res.send(`${newBounty.firstName} ${newBounty.lastName} was added to the list.`)
})


app.listen(9000, () => {
  console.log("I'm a server!")
})