const express = require ('express');
const app= express();
const mongoose = require('mongoose');
const mongoConnectionString = require('./config/keys').mongoURI;
//const users = require("./routes/api/users");
//const tweets = require("./routes/api/tweets");
//const bodyParser = require('body-parser');

mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true});
  
app.get('/', (req,res) => res.send('Hello world'));
//app.use("/api/users", users);
//app.use("/api/tweets", tweets);


//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

