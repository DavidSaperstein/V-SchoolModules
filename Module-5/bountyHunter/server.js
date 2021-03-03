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
  },
  {
    firstName: 'Darth',
    lastName: 'Vader',
    living: false,
    bountyAmounte: 1000,
    type: 'Sith',
    _id: uuid()
  },
  {
    firstName: 'Han',
    lastName: 'Solo',
    living: false,
    bountyAmount: 500,
    type: 'Mercenary',
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

app.delete('/:bountyId', (req, res) => {
  const deleteId = req.params.bountyId
  const deleteIndex = bounties.findIndex(bounty => bounty._id === deleteId)
  bounties.splice(deleteIndex, 1)
  res.send('Successfully eliminated bounty')  
})

app.put('/:bountyId', (req, res) => {
  const putId = req.params.bountyId
  const putIndex = bounties.findIndex(bounty => bounty._id === putId)
  const updatedBounty = Object.assign(bounties[putIndex], req.body)
  res.send(updatedBounty)
})


app.listen(9000, () => {
  console.log("I'm a server!")
})