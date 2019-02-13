const Message = require('../models/message.model');

module.exports.getRoom = (req, res, next ) => {
  Message.find({
    $or: [{form: req.user.id, to:req.params.id},{form:req.params.id, to:req.user.id}]
  })
};