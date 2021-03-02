const JwtStragety =passport.JwtStragety;
const ExtractJwt = passport.ExtractJwt;
const mongoose = require ('mongoose');
const User =mongoose.model('users');
const Tweet =mongoose.model('tweet');
const keys= require('./keys');
//const  passport = require("passport");
const passportJWT = require("passport-jwt");

const options ={};
options.jwtFromRequest= ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrkey = keys.secretOrkey;

module.exports = passport =>{
    passport.use(new JwtStragety (options, (jwt_payload,done) =>{
        console.log(jwt_payload);
        done();
    }) )
}