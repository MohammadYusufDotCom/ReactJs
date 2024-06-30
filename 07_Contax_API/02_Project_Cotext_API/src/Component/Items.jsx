import React from 'react'
import { CartContext } from '../Context/Context'

function Items(props) {
    // const {cart, setCart} = CartContext;
    const {cart, setCart} = CartContext();
    console.log(cart);
  return (
    <div>
        <div >
            <h4>{props.name}</h4>
            <p> Price - ${props.price}</p>
            <button onClick={()=>setCart([...cart,{name :props.name,price: props.price},])}>Add to cart</button>
        </div>
        
    </div>
  )
}

export default Items