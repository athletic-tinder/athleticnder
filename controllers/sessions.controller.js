const passport = require ('passport');

module.exports.login = (req, res, next) => {
  res.render('splash.hbs');
}

module.exports.delete = (req, res, next) => {
  req.logout();
  res.redirect('/sessions/create');
 }


module.exports.createWithIDPCallback = (req, res, next) => {
  passport.authenticate(`${req.params.provider}-auth`, (error, user) => {
    if (error) {
      next(error);
    } else {
      req.login(user, (error) => {
        if (error) {
          next(error)
        } else {
          res.redirect(`/profile`)
        }
      });
    }
  })(req, res, next);
 }