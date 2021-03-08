const express = require ('express');
const bodyParser = require('body-parser');
const app= express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const tweet = require("./routes/api/tweet");
const User= require('./Models/User');
const Tweet= require('./Models/Tweet');
mongoose
.connect(db, { useNewUrlParser: true ,useUnifiedTopology: true})
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

//app.use(bodyParser.urlencoded({ 
  //  extended: false }));
    
//app.use(bodyParser.json()); 

/*app.get('/', (req,res) => {
   const newUser = new User({
        handle: req.body.handle ,
        email: req.body.email,
        password: req.body.password
      });
      user.save(); 
res.send('done');
});*/
//middleware
app.use("/api/users", users);
app.use("/api/tweet", tweet);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

