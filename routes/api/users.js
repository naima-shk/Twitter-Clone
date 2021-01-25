const express = require('express');
const router= express.Router();
const User= require('../../Models/User');
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt  = require('jsonwebtoken');
const passport =require ('passport');
const ValidateRegisterInput =require('../../validation/register');
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
  const {errors, isValid} = ValidateRegisterInput(req.body);
     return res.status(400).json(errors);
    // Check to make sure nobody has already registered with a duplicate email
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          // Throw a 400 error if the email address already exists
          return res.status(400).json({email: "A user has already registered with this address"})
        } else {
          // Otherwise create a new user
          const newUser = new User({
            handle: req.body.handle,
            email: req.body.email,
            password: req.body.password
          })
  
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            })
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