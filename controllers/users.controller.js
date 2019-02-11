const User = require('../models/user.model');
const Relationship = require('../models/relationship.model');

module.exports.profile = (req, res, next) => {
  res.render('profile/index');
}

module.exports.list = (req, res, next) => {
  res.render('profile/matches');
}

module.exports.edit = (req, res, next) => {
  res.render('profile/edit');
}

module.exports.doEdit = (req, res, next) => {
  const updates = {
    name: req.body.name, 
    age: req.body.age,
    gender: req.body.gender,
    lookingFor: req.body.lookingFor
  } 

  User.findByIdAndUpdate(req.user._id, {$set: updates}, {new: true})
    .then(user => {
        if (user) {
          res.redirect('/adopta');
        } else {
          res.redirect('/');
        }
    })
    .catch (error => next(error));
    
}

Relationship.find( { status: 'reject' })
  .then(relation => {
    if (relation) {
    } else {
    }
  })
  .catch (error => next(error));


module.exports.list = (req,res, next) => {
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
      res.render('adopta',{ users });
    })
    .catch(error => next(error))
}