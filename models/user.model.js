const mongoose = require('mongoose');
const constants = require('constants');

const schema = new mongoose.Schema({
  social:{
    facebookId: String
  },
  name: {
    type: String,
    required:true,
    trim: true,
  },
  email: {
    type: String,
    required:true,
    trim: true,
  },
  image:{ 
    type: String, //tiene que ir una URL de la img de FB
    required:true,
    trim:true,
  },
  gender:{
    type: String,
    required: true,
    enum: constants.gender //Hombre, mujer, otros
  },
  lookingFor:{
    type: String,
    required: true,
    enum: constants.gender //Hombre, mujer, otros
  },
  categories:{
    type: [String],
    enum: constants.categories
  }
}, { timestamps: true });


const User = mongoose.model('User', schema);
module.exports = User;