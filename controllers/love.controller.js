const Relationship = require('../models/relationship.model');
const User = require('../models/user.model');


module.exports.adopta = (req,res, next) => {
  const lookingFor = req.user.lookingFor;
  const userId = req.user.id;

  const query  = { 
     ...(lookingFor !== 'todos' ? { gender: lookingFor } : null),
    _id: { $ne: userId }, 
  }

  User.find(query)
    .populate('relationships', null, {users: { $in: [userId] } })
    .then(users => {
      users = users.filter(user => {
        return user.relationships.length === 0 || (user.relationships[0].status === 'pending' && user.relationships[0].users[0] != userId);
        
      });
      console.log (users)
      // users = [ users[0] ] || [];
      // console.log (users)
      // if (!users[0]){
      //   console.log ('Nopi')
      //   res.render('love/alone');
      // }
      if(!users.length) {
        res.render('love/alone');
      }
       
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
  const query = {
    ...{status: 'matched'}, 
   users: { $in: [req.user.id]}
  }

  Relationship.find(query)
  .populate('users')
  .then(relationships => {
    const filterList = relationships.map(relationship => {
      return relationship.users.find(user => user.id !== owner)
    });
    res.render('matches/matches', { relationships: filterList })
  }) 
}