const Relationship = require('../models/relationship.model');
const User = require('../models/user.model');

module.exports.list = (req, res, next) => {
  res.render('messages/messages');
}