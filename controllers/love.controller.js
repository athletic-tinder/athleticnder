const Relationship = require('../models/relationship.model');
const User = require('../models/user.model');


module.exports.adopta = (req,res, next) => {
  const lookingFor = req.user.lookingFor;
  const userId = req.user.id;

  const query  = { 
     ...(lookingFor !== 'Todos' ? { gender: lookingFor } : null),
    _id: { $ne: userId }, 
    //no muestrame las relaciones rejected
    //muestrame las relaciones en las que no soy owner
  }
      // if (lookingFor !== "Todos"){
      //   query.gender = lookingFor;
      // }

  User.find(query)
    .then(users => {
      res.render('love/adopta',{ users });
    })
    .catch(error => next(error))
}

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

module.exports.list = (req,res, next) => {
  const owner = req.user.id;
  const query = {users: owner}

  Relationship.find(query)
  .populate('users')
  .then(relationships => {
    const filterList = relationships.map(relationship => {
      return relationship.users.find(user => user.id !== owner)
    });
    console.log(filterList[0]);
    res.render('matches/matches', { relationships: filterList })
  }) 
}

module.exports.messages = (req, res, next ) => {
  res.render('messages/messages');
}