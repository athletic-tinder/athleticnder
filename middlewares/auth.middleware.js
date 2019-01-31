const createError = require('http-errors');


module.exports.isProfileCompleted = (req, res, next) => {
  if (req.isProfileCompleted()) {
    next()
  } else {
    res.status(401)
      .redirect('/');
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