const express = require('express')
const app = express()
const { v4: uuid } = require('uuid')

app.use(express.json())

const pokemon = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    price: 100,
    id: uuid()
  },
  {
    name: 'Ivysaur',
    type: 'Grass',
    price: 1000,
    id: uuid()
  },
  {
    name: 'Venusaur',
    type: 'Grass',
    price: 10000,
    id: uuid()
  },
  {
    name: 'Squirtle',
    type: 'Water',
    price: 100,
    id: uuid()
  },
  {
    name: 'Wartortle',
    type: 'Water',
    price: 1000,
    id: uuid()
  },
  {
    name: 'Blastoise',
    type: 'Water',
    price: 10000,
    id: uuid()
  },
  {
    name: 'Charmander',
    type: 'Fire',
    price: 100,
    id: uuid()
  },
  {
    name: 'Charmeleon',
    type: 'Fire',
    price: 1000,
    id: uuid()
  },
  {
    name: 'Charizard',
    type: 'Fire',
    price: 10000,
    id: uuid()
  }
]

app.get('/', (req, res) => {
  res.send(pokemon)
})

app.get('/pokemon/:id', (req, res) => {
  const pokemonId = req.params.id
  const thatPokemon = pokemon.filter(poke => poke.id === pokemonId)
  res.send(thatPokemon)
})

app.get('/pokemon/search/type', (req, res) => {
  const type = req.query.type
  const filteredPokemon = pokemon.filter(poke => poke.type === type)
  res.send(filteredPokemon)
})

app.get('/pokemon', (req, res) => {
  console.log(req.query)
  let minPrice = req.query.minPrice
  let maxPrice = req.query.maxPrice
  if(typeof minPrice === 'undefined'){
    minPrice = 0
  }
  if(typeof maxPrice === 'undefined'){
    maxPrice = 1000000
  }
  const filteredPokemon = pokemon.filter(poke => poke.price >= minPrice && poke.price <= maxPrice)
  console.log(filteredPokemon)
  res.send(filteredPokemon)
})

app.listen(9000, () => {
  console.log("I'm a server!")
})
