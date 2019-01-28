const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  }
}, { timestamps: true });


const User = mongoose.model('User', schema);
module.exports = User;