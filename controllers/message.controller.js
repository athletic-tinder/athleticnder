const Message = require('../models/message.model');

module.exports.getRoom = (req, res, next ) => {
  Message.find({
    $or: [{from: req.user.id, to:req.params.id},{from:req.params.id, to:req.user.id}]
  })
  .populate('from')
  .populate('to')
  .then(messages => {
    res.render('messages/messages', { messages, interestedId: req.params.id });
  })
  .catch(error => next(error))
}

module.exports.sendMessage = (req, res, next) => {
  // Traernos el id del otro
  // Crear un nuevo mensaje (yo soy el from, el otro usuario el to, y req.body.text el text)
  // en el then hacemos un redirect a /messages/iddelotro
  const message = new Message({
    from: req.user.id,
    to: req.params.id,
    text: req.body.text
  })
  message.save()
  .then(() => res.redirect(`/messages/${req.params.id}`))
  .catch(error => next(error))
}