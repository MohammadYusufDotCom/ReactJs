import React from "react";
import { CartContext } from "../Context/Context";

function Cart() {
//   const value = useContext(CartContext);
  const value = CartContext();
  const total = value.cart.reduce((a,b)=>(a+b.price),0)
  return (
    <div >
      <h2>Cart</h2>
      {value.cart.map((item) => {
        return (
            <>
            <p>{item.name}</p>
            </>
        )
      })
      }
      <h5>Total Amount : $ {total} </h5>
    </div>
  );
}

export default Cart;
