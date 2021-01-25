const express = require('express');
const router= express.Router();
const User= require('../../Models/User');
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt  = require('jsonwebtoken');
const passport =require ('passport');
const validateRegisterInput =require('../../validation/register');
const ValidateLoginInput = require ('../../validation/login');

router.get('/test', (req,res) =>{
    res.json({msg:"This is a user route"});
});

router.get("/current", passport.authenticate ("jwt",{session: false}),
 (res,req) =>{
   res.send(req.user);
 }
) 

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // Use the validations to send the error
        errors.email = 'Email already exists';
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        })
      }
    })
})

  router.post('/login', (req,res) =>{
    const email= req.body.email;
    const password =req.body.password;

    User.findOne({email})
    .then(user =>{
      if(!user){
        return res.status(400).json({email:"This email does not exist."});
      }

      bcrypt.compare(password, user.password)
      .then(isMatch =>{
        if(isMatch){
         const payload ={
           id: user.id,
           handle:user.handle,
           email: user.email
         }
         const token = jwt.sign(payload, 'secret', { expiresIn: 3600 });

         res.json({
           success: true,
           token: 'Bearer ' + token,
         }); 
         
         
        } else{
          return res.status(400).json({password: "Incorrect password"});
        }
      })
    })
  })

module.exports= router;