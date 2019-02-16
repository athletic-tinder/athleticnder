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
  social: {
    facebookId: String
  }
}, { timestamps: true, toObject: {virtuals:true} });

schema.virtual('relationships', {
  ref: 'Relationship', // The model to use
  localField: '_id', // Find people where `localField`
  foreignField: 'users', // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
  options: { sort: { name: -1 }, limit: 5 } // Query options, see http://bit.ly/mongoose-query-options
});


const User = mongoose.model('User', schema);
module.exports = User;