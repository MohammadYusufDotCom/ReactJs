const mongoose = require ('mongoose');


const productSchema = new mongoose.Schema({
    product_name :{
        type:String,
        require:true
    },
    category:{
        type:String
    },
    price:{
        type:Number,
        require:true
    },
    stock:{
        type:Number
    }
    

});

const product = mongoose.model('product',productSchema);

module.exports = product;