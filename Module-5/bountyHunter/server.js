const express = require('express')
const bountyRouter = express()

bountyRouter.use(express.json())
bountyRouter.use('/bountyRouter', require('./routes/bountyRouter'))


bountyRouter.listen(9000, () => {
  console.log("I'm a server!")
})