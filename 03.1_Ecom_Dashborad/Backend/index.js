const cros = require("cors");
const express = require("express");
require("./DB/config.js");
const User = require("./DB/UserModel.js");
const product = require('./DB/ProductModel.js')
const { default: mongoose } = require("mongoose");

//For Json Authentication we use JWT 
const jwt = require('jsonwebtoken')
const jwtkey = 'e-comm'


//Middleware
const app = express();
app.use(express.json());
app.use(cros());

function verification(req, resp, next) {
  let token = req.headers.authorization;
  try{
  if (token) {
    token = token.split(' ')[1]
    console.log(token);
    jwt.verify(token,jwtkey,(err,valid)=>{
      if(err){
        resp.status(401).send({status:"You are unauthorized. please provide valid token."})
      }else{
        console.log({status:`token verified ==>>${valid}`});
        next()
      }
    })
  } else {
    console.log({ status: 'Jwt token not find' });
    resp.status(401).send({status:'Jwt token not find'})
  }}catch(err){
    console.log(err,"\n Authentication failed");
    resp.status(401).send({status:"Authentication failed"})
  }
}


//Add a new product into DataBase
app.post('/registerProduct', verification,async (req, resp) => {
  let result = await new product(req.body)
  result = await result.save()
  console.log("Body hai ye \n", req.body)
  console.log("\nResut hai ye \n", result)
  resp.send(result)
});

//Get all list of product from database
app.get('/product', verification,(req, resp) => {
  product.find()
    .then((data) => {
      if (data) {
        console.log(data);
        resp.send(data)
      } else {
        resp.send({ Result: 'No data Found' })
      }
    })
})

//Modify the exiting product 
app.put("/editProduct/:_id",verification,async (req, resp) => {
  try {
    let result = await product.updateOne(
      req.params,
      {
        $set: req.body
      })
    console.log(result)
    resp.send(result)
  } catch (err) {
    console.log({ Status: "Error, Id should be 24 byte hexadecimal" });
    resp.send({ Status: "Error, Id should be 24 byte hexadecimal" });
  }
})

//This is the part of modify, this is used for getting single product
app.get('/getdata/:_id',verification,async (req, resp) => {
  // const value = new mongoose.Types.ObjectId(req.params._id) //make new object ID
  try {
    let result = await product.findOne(req.params) //it gives me an object {_id:valueOfParams}
    if (result) {
      console.log(result)
      resp.send(result)
    } else {
      console.log({ status: "Failed, Product Not Exist" });
      resp.send({ status: "Failed, Product Not Exist" })
    }
  } catch (err) {
    console.log({ status: "Error Id must be 24 hex character" });
    resp.send({ status: "Error Id must be 24 hex character" })
  }
})

// Deleting a product 
app.delete('/deleteproduct/:_id', verification, async (req, resp) => {
  result = await product.deleteOne(req.params)
  console.log(result);
  resp.send({ status: result })
})

// Searching using multiple method 
app.get('/search/:element',verification ,async (req, resp) => {
  try {
    let result = await product.find({
      "$or": [
        { product_name: { $regex: req.params.element } },
        { category: { $regex: req.params.element } }
      ]
    })
    console.log(result);
    resp.send(result)
  } catch (err) {
    console.log(err + "my err");
    resp.send(err)
  }
})



// For Registring a new User into database Or Signup API
app.post("/register", async (req, resp) => {
  try {
    const newUser = new User(req.body);
    let user = await newUser.save();
    user = user.toObject();
    delete user.password;
    jwt.sign({ newUser }, jwtkey, { expiresIn: '1h' }, (err, token) => {
      if (err) {
        console.log(err);
        resp.status(401).send({ status: "someting went wrong please after some time." })
      } else {
        // let result = await newUser.save();//we can also put it here 
        console.log({ user, auth: token });
        resp.send({ user, auth: token });
      }
    })
  } catch (err) {
    console.log(err, "\ncatch");
    resp.status(401).send(err);
  }
});


//For log in user in existing account
app.post("/login", async (req, resp) => {
  if (req.body.email && req.body.password) {
    const user = await User.findOne(req.body).select("-password");
    if (user) {
      jwt.sign({ user }, jwtkey, { expiresIn: '1h' }, (err, token) => {
        if (err) {
          console.log(err);
          resp.status(401).send({ status: "someting went wrong please after some time." })
        } else {
          console.log({ user, auth: token });
          resp.send({ user, auth: token });
        }
      })
      // console.log(user);
      // resp.send(user);
    } else {
      console.log("user not found");
      resp.status(401).send({ status: "Invalid Credential" });
    }
  } else {
    console.log("Email and Password is required");
    resp.status(401).send({ status: "Email and Password is required" });
  }
});

app.listen(5000);




// const newUser = new User({
//     name:"mohammad",
//     email:"mohammd@gmail.com",
//     password:"mohammad@1234"
// })
// newUser.save()
// .then(res=>console.log("data saved",res))
// .catch(err=>console.log("faild data save",err))
