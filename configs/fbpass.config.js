const passport = require ("passport");
const FbPassport = require ("passport-facebook").Strategy;

const User = required ("../models/user.model.js");


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
  callbackURL: process.env.FB_AUTH_CB || "/sessions/facebook/cb",
  profileFields: [ 'id', 'name', 'profile_pic']
},authicatedOauthUser));

function authicatedOauthUser(accessToken, refreshToken, profile, next) {
  
  let fbId = '${profile.provider}Id';
  
  User.findOne ({ [ 'social.${fbId}']: profile.id })
    .then (user => {
      if (user){
        next (null, user);
      }else {
        user= new User({
          name: profile.displayName,
          password: Math.random().toString(23).substring(7),
          image: profile_pic
        })
      }
    })
    return user.save ()
      .then (user => {
        next(null, user);
      })
    
    .catch (error => next (error));  
};