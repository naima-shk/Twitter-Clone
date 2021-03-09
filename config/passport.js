//const JwtStrategy = require('passport-jwt').Strategy;
//const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Tweet = mongoose.model('Tweet');
const keys = require('../config/keys');
//const passport = require('passport');
//const passportJWT = require('passport-jwt');
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const options = {};
options.JWTFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(new JWTStrategy(options, (Jwt_payload, done) => {
    // This payload includes the items we specified earlier
    console.log(Jwt_payload);
    done();
  }));
};