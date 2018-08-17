const mongoose = require('mongoose');

const crossSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  photo: {
    type: String,
    required: 'please upload a photo'
  },
  pdf: {
    type: String,
    required: 'please uplaod a pdf'
  }
});

module.exports = mongoose.model('Cross', crossSchema);
