const mongoose = require('mongoose');
const constants = require('constants');

const schema = new mongoose.Schema({
  social:{
    facebookId: String
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
    min: 18,
    max: 110
  },
  image:{ 
    type: String, //tiene que ir una URL de la img de FB
    required: true,
    trim: true,
  },
  gender:{
    type: String,
    enum: constants.gender //Hombre, mujer, otros
  },
  lookingFor:{
    type: String,
    enum: constants.gender //Hombre, mujer, otros
  },
  categories:{
    type: [String],
    enum: constants.categories
  },
  social: {
    facebookId: String
  }
}, { timestamps: true });


const User = mongoose.model('User', schema);
module.exports = User;