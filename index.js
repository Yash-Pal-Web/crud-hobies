const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");

//let uri = "mongodb://localhost:27017/testingMongo";
 let uri = "mongodb+srv://xornor:xornor123@cluster0.se6deff.mongodb.net/test";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const User = require("./models/user");
const Hobby = require("./models/hobbies");

mongoose.connect(uri, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to mongo", uri);
  }
});

app.get("/", (req, res) => {
  res.send("Hello Kausav");
});

let createUser = async (req, res) => {
  try {
    console.log(req.body);
    let user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
     console.log(user);

   // forEach loop
    // if ( req.body.hobbies && req.body.hobbies.length > 0) {
    //   req.body.hobbies.forEach(async (i) => {
    //     await Hobby.create({ userId: user._id, hobby: [i] });
    //   });
    // } else {
    //   console.log("hobby is not defined");
    // }

    if(req.body.hobbies && req.body.hobbies.length>0){
      for( let i=0; i<req.body.hobbies.length;i++){
        await Hobby.insertMany([{ userId : user._id, hobby: req.body.hobbies[i]}])
      }
    }








    // res.send({ user:  user });
  } catch (err) {
    console.log(err);
  }
};

app.post("/createUser", createUser);

app.listen(5000);
