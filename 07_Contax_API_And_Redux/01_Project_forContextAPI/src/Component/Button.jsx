import React from 'react'
import { useContext } from 'react'
import { ConutContext } from '../context/Context'

function Button() {
    const {count,setCount} = useContext(ConutContext)

    const increment= () =>{
        setCount(count+1)
    }
    const decrement= () =>{
        setCount(count-1)
    }
  return (
    <div style={{display: "flex", gap: "2px",margin:"0 0 2px"}}>
    <button type='submit' onClick={increment}>Increment</button>
    <button type='submit' onClick={decrement}>Decrement</button>
    </div>
  ) 
}

export default Button