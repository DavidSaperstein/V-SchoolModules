const express = require('express')
const app = express.Router()
const { v4 : uuid } = require('uuid')

const bounties = require('../bountyData')


app.get('/', (req, res) => {
  res.send(bounties)
})

app.post('/', (req, res) => {
  const newBounty = req.body
  newBounty._id = uuid()
  bounties.push(newBounty)
  res.send(newBounty)
})

app.delete('/:bountyId', (req, res) => {
  if(req.params.bountyId) {
    const deleteId = req.params.bountyId
    const deleteIndex = bounties.findIndex(bounty => bounty._id === deleteId)
    if(deleteIndex === -1) {
      res.send('Id provided is invalid')
    } else {
      bounties.splice(deleteIndex, 1)
      res.send('Successfully eliminated bounty')
    }
  } else {
    res.send('No id provided')
  }
})

app.put('/:bountyId', (req, res) => {
  const putId = req.params.bountyId
  const putIndex = bounties.findIndex(bounty => bounty._id === putId)
  const updatedBounty = Object.assign(bounties[putIndex], req.body)
  res.send(updatedBounty)
})

module.exports = app