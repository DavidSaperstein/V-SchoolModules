const express = require('express')
const inventoryRouter = express.Router()
const Product = require('../models/inventory.js')

inventoryRouter.get('/', (req, res, next) => {
  Product.find((err, inventory) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(inventory)
  })
})

inventoryRouter.post('/', (req, res, next) => {
  const newProduct = new Product(req.body)
  newProduct.save((err, savedProduct) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedProduct)
  })
})

module.exports = inventoryRouter