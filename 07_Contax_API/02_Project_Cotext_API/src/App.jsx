import { useState } from 'react'
import './App.css'
import { CartContextProvider } from './Context/Context'
import Cart from './Component/Cart'
import Items from './Component/Items'

function App() {

  return (
    <CartContextProvider > 
      <div style={{display:"flex", gap:"20rem"}}>
        <span>
      <Items name={"Laptop"} price={3000} />
      <Items name={"Pendrive"} price={300} />
      <Items name={"Mobile"} price={1500} />
        </span>
      <Cart/>
      </div>
    </CartContextProvider>
  )
}

export default App
