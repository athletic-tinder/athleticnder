
const createError = require('http-errors');

module.exports.isProfileCompleted = (req, res, next) => {
  if ([req.user.name, req.user.age, req.user.gender,req.user.lookingFor].includes(null)) {
    return res.redirect('/profile/edit');
  } else {
    next();
  }
}

module.exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.status(401)
      .redirect('/sessions/create');
  }
}