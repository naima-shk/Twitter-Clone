const express = require ('express');
const bodyParser = require('body-parser');
const app= express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
//const tweets = require("./routes/api/tweets");
const User= require('./Models/User');

mongoose
.connect(db, { useNewUrlParser: true ,useUnifiedTopology: true})
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ 
    extended: false }));
    
app.use(bodyParser.json()); 

app.get('/', (req,res) => {
 const user = new User({
    handle: user.handle,
    email: user.email,
    password: user.password
})
 user.save()
 res.send('Hello world');
});
//middleware
app.use("/api/users", users);
//app.use("/api/tweets", tweets);




const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

