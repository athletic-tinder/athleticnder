const Relationship = require('../models/relationship.model');

module.exports.handleMatch = (req, res, next) => {
  const status = req.body.status;

  const owner = req.user.id;
  const interested = req.params.id;
  const query = {users: { $all: [owner, interested] } }

  Relationship.findOne(query)
    .then(relationship => {
      if (!relationship) {
        relationship = new Relationship({
          users: [owner, interested],
          status: status === 'dislike' ? 'rejected' : 'pending'
        });
      } else if (status === 'dislike') {
        relationship.status = 'rejected';
      } else if (relationship.users[0] != req.user.id && 
          status === 'like' && 
          relationship.status === 'pending') {
        relationship.status = 'matched';
      }
      
      return relationship.save()
        .then(() => res.redirect('/adopta'))
  })
  .catch(error => next(error))
}

module.exports.messages = (req, res, next ) => {
  res.render('messages/messages');
}

module.exports.list = (req, res, next ) => {
  const query  = { 
    ...(lookingFor !== 'Todos' ? { gender: lookingFor } : null),
   _id: { $ne: userId },
 }

  Relationship.findOne(query)
  .then(relationship => {
    if(relationship.status === 'matched')
    res.render('matches',{ matches });
  })
  .catch(error => next(error))
}

module.exports.list = (req,res, next) => {
  res.render('matches/matches');
}