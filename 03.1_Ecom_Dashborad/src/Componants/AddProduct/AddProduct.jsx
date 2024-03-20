import React, { useState } from "react";
import "./product.css"
import { useNavigate } from "react-router-dom";

function Product() {

  let [product_name, setName] = useState()
  let [category, setCategory] = useState()
  let [price,setPrice ] = useState()
  let [stock,setStock ] = useState()
  let [error,setError] = useState(false)
  const navigate = useNavigate()

  async function  addProduct(){
    if (!product_name||!category||!price|!stock){
      setError(true)
      return;
    }
    
    let response = await fetch('http://localhost:5000/registerProduct',{
      method: 'post',
      body: JSON.stringify({product_name, category, price, stock}),
      headers:{'Content-Type':'application/json',
     authorization:`bearer ${JSON.parse(localStorage.getItem('auth'))}`
    }
    })
    response = await response.json()
    console.log(response)
    navigate('/product')
  }
  
  return (
      <form 
      action="submit"
      onSubmit={e=>{
        e.preventDefault()
        addProduct()
      }}
      >
        <div className="  flex items-center flex-col justify-center">
        
        <div className="flex flex-col w-1/5 m-10 mt-28">
        <h1 className="text-2xl font-semibold">Add Product</h1>
          <input type="text" 
          placeholder="Name"
          value={product_name}
          onChange={(e)=>setName(e.target.value)}
          className=" focus:border-[2px] rounded-lg px-4 h-10 focus:border-green-500 outline-none my-1.5 border-[1px] border-gray-300 text-center"
          />
        {error && !product_name &&<span className="text-red-600 text-xs -mt-[5px] ml-2">*Please enter the name</span>} 
          
          <input type="text" 
          placeholder="Category"
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          className=" focus:border-[2px] rounded-lg px-4 h-10 focus:border-green-500 outline-none my-1.5 border-[1px] border-gray-300 text-center"
          />
         {error && !category &&<span className="text-red-600 text-xs -mt-[5px] ml-2">*Please enter the category</span>} 

          <input type="number" 
          placeholder="Price"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
          className=" focus:border-[2px] rounded-lg px-4 h-10 focus:border-green-500 outline-none my-1.5 border-[1px] border-gray-300 text-center"
          />
         {error && !price &&<span className="text-red-600 text-xs -mt-[5px] ml-2">*Please enter the price</span>} 

          <input type="number" 
          placeholder="Stock"
          value={stock}
          onChange={(e)=>setStock(e.target.value)}
          className=" focus:border-[2px] rounded-lg px-4 h-10 focus:border-green-500 outline-none my-1.5 border-[1px] border-gray-300 text-center"
          />
         {error && !stock &&<span className="text-red-600 text-xs -mt-[5px] ml-2">*Please enter the stock</span>} 

        </div>
        <button type="submit" className="bg-green-500 rounded-lg px-2 py-2 focus:bg-green-600">Add Product</button>
        </div>
      </form> 
  );
}

export default Product;