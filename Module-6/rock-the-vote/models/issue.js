const mongoose = require('mongoose')
const Schmea = mongoose.Schmea

const issueSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
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
    type: Array,
    required: true
  },
  downvotes: {
    type: Array,
    required: true
  }
})

module.exports = mongoose.model("Issue", issueSchema)