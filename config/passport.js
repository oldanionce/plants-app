const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/User");

const customFields = {
  usernameField: "email",
  passwordField: "password",
};

const verifyCallback = function (email, password, done) {
  User.findOne({ email }, function (error, user) {
    if (error) {
      return done(error);
    }
    if (!user) {
      return done(null, false, {
        message: `No user found with email <${email}>`,
      });
    }
    return !user.validPassword(password)
      ? done(null, false, { message: "Wrong password" })
      : done(null, user);
  });
};

passport.use(new LocalStrategy(customFields, verifyCallback));
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id, function (error, user) {
    done(error, user);
  });
});
