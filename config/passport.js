const JwtStragety = require ('passport-jwt').Stragety;
const ExtractJwt = require ('passport-jwt').ExtractJwt;
const mongoose = require ('mongoose');
const User =mongoose.model('users');
const keys= require('./keys');

const options ={};
options.jwtFromRequest= ExtractJwt.fromAuthHeaderAsBearerToken();