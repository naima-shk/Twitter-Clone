const express = require('express');
const router= express.Router();
const users = require('../../Models/users');

router.get('/test', (req,res) =>{
    res.json({msg:"This is a user route"});
});

 // Check to make sure nobody has already registered with a duplicate email
router.post('/register', (req,res)=>{
  users.findOne({email:req.body.email})
    .then(user =>{
        if(user){
     // Throw a 400 error if the email address already exists
        return res.status(400).json({email:"A user is already registered with that email"})
        } else{
            const newUser = new User({
                handle:req.body.handle,
                email:req.body.email,
                password:req.body.password
            })
            newUser.save().then(users => res.send(users)).catch(err => res.send(err)); //take this for testing
        }
})
});
  
module.exports = router;
