module.exports.profile = (req, res, next) => {
  res.render('profile/index');
}

module.exports.edit = (req, res, next) => {
  res.render('profile/edit');
}

module.exports.list = (req, res, next) => {
  res.render('users');
}