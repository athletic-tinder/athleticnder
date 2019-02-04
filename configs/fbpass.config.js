const passport = require ("passport");
const FbPassport = require ("passport-facebook").Strategy;

const User = require ("../models/user.model.js");




//Passport también necesita serializar y deserializar la instancia de usuario de un almacén de sesiones para poder dar soporte a las sesiones de inicio de sesión, de modo que cada solicitud subsiguiente no contenga las credenciales del usuario.
passport.serializeUser((user, next) => {
  next (null, user._id);
});

passport.deserializeUser((id, next) => {
  User.findById(id)
    .then(user => {next (null, user);})
    .catch (error => next (error));
});

passport.use('facebook-auth', new FbPassport({
  clientID: process.env.FB_AUTH_CLIENT_ID || "todo",
  clientSecret: process.env.FB_AUTH_CLIENT_SECRET || "todo",
  callbackURL: process.env.FB_AUTH_CB || "/facebook/cb",
  profileFields: [ 'displayName', 'emails', 'picture.type(large)' ]
},authicatedOauthUser));

function authicatedOauthUser(accessToken, refreshToken, profile, next) {
  console.log({profile});
  
  let fbId = `${profile.provider}Id`;
  
  User.findOne ({ [ `social.${fbId}`]: profile.id })
    .then (user => {
      if (user){
        next (null, user);
      } else {
        const user = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          image: profile.photos[0].value,
          social: { facebookId: profile.id }
        })
        return user.save ()
          .then (user => {
            next(null, user);
          })
      }
    })
    .catch (error => next (error));  
};

