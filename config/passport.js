const JwtStragety = require ('passport-jwt').Stragety;
const ExtractJwt = require ('passport-jwt').ExtractJwt;
const mongoose = require ('mongoose');
const User =mongoose.model('users');
const Tweet =mongoose.model('tweet');
const keys= require('./keys');

const options ={};
options.jwtFromRequest= ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrkey = keys.secretOrkey;

module.exports = passport =>{
    passport.use(new JwtStragety (options, (jwt_payload,done) =>{
        console.log(jwt_payload);
        done();
    }) )
}