const { v4 : uuid } = require('uuid')

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

module.exports = bounties