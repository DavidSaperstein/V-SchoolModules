const mongoose = require('mongoose')
const Schmea = mongoose.Schmea

const issueSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
  },
  dateAdded: {
    type: Date,
    required: true
  },
  upvotes: {
    type: Number,
    required: true
  },
  downvotes: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("Issue", issueSchema)