const express = require ('express');
const bodyParser = require('body-parser');
const app= express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/Api/users");
//const tweets = require("./routes/api/tweets");
const User= require('./Models/User');

mongoose
.connect(db, { useNewUrlParser: true ,useUnifiedTopology: true})
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

app.get('/', (req,res) => {
 /*const user = new User({
    handle: 'john',
    email: "john@john.john",
    password: "john1234"
})*/
 user.save()
 res.send('Hello world');
});
//middleware
app.use("/Api/users", users);
//app.use("/api/tweets", tweets);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

