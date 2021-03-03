const middleware = ('/classes', (req, res, next) => {
  console.log('oh you want some class?')
  next()
})

module.exports = middleware