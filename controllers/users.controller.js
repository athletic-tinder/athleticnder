const User = require('../models/user.model');

module.exports.profile = (req, res, next) => {
  res.render('profile/index');
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
          res.redirect('/matcheaks');
        } else {
          res.redirect('/');
        }
    })
    .catch (error => next(error));
    
}

module.exports.list = (req, res, next) => {
  const lookingFor = req.user.lookingFor;
  const userId = req.user.id;

  const query  = { 
    ...(lookingFor !== 'todos' ? { gender: lookingFor } : null),
    _id: { $ne: userId }
  }

  User.countDocuments(query)
    .then(number => {
        const randomNumber = Math.floor(Math.random() * number)
        return User.findOne(query, null, {skip: randomNumber})
         .then(user => {
           console.log(user);
           res.render('matcheaks',{ user });
         })
      })
   .catch (error => next(error));
}

