const mongoose = require('mongoose');
const constants = require('constants');

const schema = new mongoose.Schema({
  users: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    default: [],
    //unique: true
  },
  status: {
    type: String,
    enum: constants.status
  }
}, { timestamps: true });

const Relationship = mongoose.model('Relationship', schema);

module.exports = Relationship;