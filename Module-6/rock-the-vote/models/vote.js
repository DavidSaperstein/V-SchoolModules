const mongoose = require('mongoose')
const Schema = mongoose.Schema

const voteSchema = new Schema({
  upOrDown: {
    type: Boolean,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  issue: {
    type: Schema.Types.ObjectId,
    ref: "Issue",
    required: true
  }
})

module.exports = mongoose.model("Vote", voteSchema)