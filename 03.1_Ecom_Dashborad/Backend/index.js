const cros = require("cors");
const express = require("express");
require("./DB/config.js");
const User = require("./DB/userModel.js");
const { default: mongoose } = require("mongoose");

//Middleware
const app = express();
app.use(express.json());
app.use(cros());

// Mohammad#yusuf7
app.post("/register", async (req, resp) => {
  try {
    const newUser = new User(req.body);
    let result = await newUser.save();
    result = result.toObject();
    delete result.password;
    console.log(result);
    resp.send(result);
  } catch (err) {
    console.log(err, "catch");
    resp.send(err);
  }
});

app.post("/login", async (req, resp) => {
  if (req.body.email && req.body.password) {
    const data = await User.findOne(req.body).select("-password");
    if (data) {
      console.log(data);
      resp.send(data);
    } else {
      console.log("user not found");
      resp.send({ status: "User not found" });
    }
  } else {
    console.log("Email and Password is required");
    resp.send({ status: "Email and Password is required" });
  }
});

app.listen(5000);
// const newUser = new User({
//     name:"mohammad",
//     email:"mohammd@gmail.com",
//     contact_Number:9821649861,
//     password:"mohammad@1234"
// })
// newUser.save()
// .then(res=>console.log("data saved",res))
// .catch(err=>console.log("faild data save",err))
