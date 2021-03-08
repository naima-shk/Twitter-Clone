const JwtStrategy = require('passport-jwt').JwtStrategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Tweet = mongoose.model('Tweet');
const keys = require('../config/keys');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(new JwtStrategy(options, (jwt_payload, done) => {
    // This payload includes the items we specified earlier
    console.log(jwt_payload);
    done();
  }));
};