const cros = require("cors");
const express = require("express");
require("./DB/config.js");
const User = require("./DB/UserModel.js");
const product = require('./DB/ProductModel.js')
const { default: mongoose } = require("mongoose");

//Middleware
const app = express();
app.use(express.json());
app.use(cros());

//Add a new product into DataBase
app.post('/registerProduct',async (req,resp)=>{
    let result = await new product(req.body)
    result = await result.save()
    console.log("Body hai ye \n",req.body)
    console.log("\nResut hai ye \n",result)
    resp.send(result)
});

//Get all list of product from database
app.get('/product',(req,resp)=>{
  product.find()
  .then((data)=>{
    if(data){
      console.log(data);
      resp.send(data)
    }else{
      resp.send({Result:'No data Found'})
    }
  })
})

//Modify the exiting product 
app.put("/editProduct/:_id",async(req,resp)=>{
  try{
  let result = await product.updateOne(
    req.params,
    {
      $set: req.body
    })
  console.log(result)
  resp.send(result)
  }catch(err){
    console.log({Status:"Error, Id should be 24 byte hexadecimal"});
    resp.send({Status:"Error, Id should be 24 byte hexadecimal"});
  }
})

//This is the part of modify, this is used for getting single product
app.get('/getdata/:_id',async(req,resp)=>{
  // const value = new mongoose.Types.ObjectId(req.params._id) //make new object ID
  try{
    let result =await product.findOne(req.params) //it gives me an object {_id:valueOfParams}
    if(result){
      console.log(result)
      resp.send(result) 
    }else{
      console.log({status:"Failed, Product Not Exist"});
      resp.send({status:"Failed, Product Not Exist"})
    }
  }catch(err){
    console.log({status:"Error Id must be 24 hex character"});
    resp.send({status:"Error Id must be 24 hex character"})
  }
})

// Deleting a product 
app.delete('/deleteproduct/:_id',async(req,resp)=>{
    result =  await product.deleteOne(req.params)
    console.log(result);
    resp.send({status:result})
})

// Searching using multiple method 
app.get('/search/:element',async (req,resp)=>{
  try{
  let result = await product.find({
    "$or":[
      {product_name:{$regex: req.params.element}},
      {category:{$regex: req.params.element}}
    ]
  }) 
  console.log(result);
  resp.send(result)
}catch(err){
  console.log(err+"my err");
  resp.send(err)
}
})



// For Registring new User into database 
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


//For log in user in existing account
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
//     password:"mohammad@1234"
// })
// newUser.save()
// .then(res=>console.log("data saved",res))
// .catch(err=>console.log("faild data save",err))
