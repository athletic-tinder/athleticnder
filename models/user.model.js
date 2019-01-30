const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  password:{
    type: String,
    unique: true,
  },
  image:{ //???
    trim:true,
  },
  token:{
    type: String
  },
}, { timestamps: true });


const User = mongoose.model('User', schema);
module.exports = User;