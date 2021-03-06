const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: 'Please enter a title name'
  },
  description: {
    type: String,
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  youtube: {
    type: String,
    trim: true
  },
  video: {
    type: String
  },
  photo: String,
  pics: Array
});

module.exports = mongoose.model('Post', postSchema);
