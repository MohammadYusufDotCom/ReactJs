const mongoose = require ('mongoose')

const connect = async ()=>{
   try{
      await mongoose.connect('mongodb://localhost:27017/Store')
   }catch(err){
      console.log(err,"\nUnable to connect database please check the configuration")
   }
};
connect()

