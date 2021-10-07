const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("Issue", issueSchema)