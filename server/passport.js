const passport = require('passport');
const passportStrategy  = require('passport-local').Strategy;
const db = require('./models');
const authenticationUtils = require('./utils/authentication');

passport.use(new passportStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
function(username, password, cb) {
    console.log(`Email is ${username}`);
    db.Volunteer.findOne({email: username}).then(volunteer => {
        if (volunteer === null) {
            cb(null, false);
        }
        if (volunteer.password != authenticationUtils.hashPassword(password)) { return cb(null, false); }
        return cb(null, volunteer);
    }).catch(err => {
        console.log(err);
        cb(err, null);
    });
    
    // function(err, user) {
    //     console.log(err);
    //     console.log('---');
    //     console.log(user);
    //     if (err) { return cb(err); }
    //     if (!user) { return cb(null, false); }
    //     if (user.password != authenticationUtils.hashPassword(password)) { return cb(null, false); }
    //     return cb(null, user);
}));
  


passport.serializeUser(function(user, cb) {
    cb(null, user._id);
  });
  
  passport.deserializeUser(function(id, cb) {
    db.Volunteer.findById(id, function (err, user) {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });

module.exports = passport;