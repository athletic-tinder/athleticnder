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
  User.find({ gender: req.user.lookingFor })
   .then (users => {
     res.render('matcheaks',{ users });
     console.log(users);
   })
   .catch (error => next(error));
}

