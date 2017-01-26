var LocalStrategy = require("passport-local");
var Users = require("../Models").Users;

module.exports = (passport) => {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    Users.findById(id, function(err, user) {
      done(err, user);
    });
  });
  // Signup
  passport.use('local-signup', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  },
  (req, email, password, done) => {
    Users.findOne({ 'email' :  email }, (err, user) => {
      if (err) {
        return done(err);
      }

      if (user) {
        return done(null, false, req.flash('Message', 'This email has been taken'));
      } else {

        // no user with this email already, so create one
        let newUser = new Users();

        newUser.email = email;
        newUser.password = newUser.generateHash(password);
        newUser.name.firstName = req.body.firstname;
        newUser.name.lastName = req.body.lastname;

        // save the user
        newUser.save((err) => {
          if (err) throw err;

          return done(null, newUser);
        });
      }
    });
  }));

  // Login
  passport.use('local-login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  },
  (req, email, password, done) => {
    Users.findOne({ 'email' :  email }, (err, user) => {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false, req.flash('Message', 'Email invalid'));
      } else {

        // password incorrect
        if (!user.validPassword(password)) {
          return done(null, false, req.flash('Message', 'Password invalid'));
        }

        // valid user return them
        return done(null, user);
      }

    });

  }));
}
