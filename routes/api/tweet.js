const express = require('express');
const router= express.Router();
const passport =require('passport');
const validateTweetInput=require("../../validation/tweets");
const Tweet =require("../../Models/Tweet");
const jwt  = require('jsonwebtoken');

router.get('/test', (req,res) =>{
    res.json({msg:"This is a tweet route"});
});
{/*router.get("/current", passport.authenticate ("jwt",{session: false}),
 (req,res) =>{
   res.send(req.tweet);
 }
) */}

router.post("/",
passport.authenticate('jwt',{session:false}),
(req,res) =>{
    const {isValid, errors} = validateTweetInput(req.body);
    if(!isValid){
        return res.status(400).json(errors);
    }
    const newTweet = new Tweet ({
      user:req.user.id,
      text:req.body.texta
    });

    newTweet.save().then(tweet => res.json(tweet));
})
module.exports=router;