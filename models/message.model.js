const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  text:{
    type: String,
    maxlength: 2000
  }
}, { timestamps: true });

const Message = mongoose.model('Message', schema);

module.exports = Message;

/**
 
$or: [{form: req.user.id, to:req.params.id},{form:req.params.id, to:req.user.id}]
 */