const express = require('express')
const app = express()
const { v4: uuid } = require('uuid')

app.use(express.json())

const todos = [
  {
    name: 'Grocery Shopping',
    description: 'Go to the store and buy groceries',
    imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/groceries-3083099-2591971.png',
    completed: false,
    id: uuid()
  },
  {
    name: 'Pick up child',
    description: 'Pick up kid from school',
    imageUrl: 'https://www.lacrosseschools.org/state-road/wp-content/uploads/sites/19/2015/08/schoolhouse-clipart-school-for-clip-art-di6e5dri9-297x300.jpg',
    completed: false,
    id: uuid()
  },
  {
    name: 'Finish V-School Homework',
    description: 'Complete todobackend',
    imageUrl: 'https://media-exp1.licdn.com/dms/image/C560BAQEHIpw5qGGrGg/company-logo_200_200/0/1601053273455?e=2159024400&v=beta&t=FSzHDZSWVQOnpm1S-px_8cRlH1rATgxKRNik4aK941I',
    completed: false,
    id: uuid()
  }
]

app.get('/', (req, res) => {
  res.send(todos)
})

app.get('/:todoId', (req, res) => {
  const id = req.params.todoId
  const filteredTodo = todos.filter(todo => todo.id === id)
  res.send(filteredTodo)
})

app.post('/', (req, res) => {
  const newTodo = req.body
  newTodo.id = uuid()
  const updatedTodos = todos.push(newTodo)
  res.send('Successfully added todo')
})

app.delete('/:todoId', (req, res) => {
  const id = req.params.todoId
  const deleteIndex = todos.findIndex(todo => todo.id === id)
  const newTodos = todos.splice(deleteIndex, 1)
  res.send('Successfully removed todo')
})

app.put('/:todoId', (req, res) => {
  const id = req.params.todoId
  const updateIndex = todos.findIndex(todo => todo.id === id)
  const newTodo = Object.assign(todos[updateIndex], req.body)
  res.send(newTodo)
})

app.listen(9000, () => {
  console.log("Let's do stuff")
})