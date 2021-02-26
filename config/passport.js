const JwtStragety = require ('passport-jwt').JwtStragety;
const ExtractJwt = require ('passport-jwt').ExtractJwt;
const mongoose = require ('mongoose');
const User =mongoose.model('users');
const Tweet =mongoose.model('tweet');
const keys= require('./keys');
var express = require("express");
//var router = express.Router();
var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');

//var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
const options ={};
options.jwtFromRequest= ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrkey = keys.secretOrkey;

module.exports = passport =>{
    passport.use(new JwtStragety (options, (jwt_payload,done) =>{
        console.log(jwt_payload);
        done();
    }) )
}