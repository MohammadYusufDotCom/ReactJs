import React from 'react'
import { useContext } from 'react'
import { ConutContext } from '../context/Context'

function Button({value}) {
    const {count,setCount} = useContext(ConutContext)

    const increment= () =>{
        setCount(count+1)
    }
    const multiple= () =>{
        setCount(count*2)
    }
    const jump= () =>{
        setCount(count+5)
    }
    const decrement= () =>{
        setCount(count-1)
    }
    const devide= () =>{
        setCount(count/2)
    }
    const loose= () =>{
        setCount(count-5)
    }
    const myAddbutton = value=="add"?"increment by 1 ":value=="multiple"?"multiple by 2":"jump by 5";
    const myRembutton = value=="add"?"decrement by 1":value=="multiple"?"devide by 2":"loose by 5";
  return (
    <div style={{display: "flex", gap: "2px",margin:"0 0 2px"}}>
    <button type='submit' onClick={value=="add"?increment:value=="multiple"?multiple:jump}
    style={{minWidth:"150px"}}>{myAddbutton}</button>
    <button type='submit' onClick={value=="add"?decrement:value=="multiple"?devide:loose}
    style={{minWidth:"150px"}}>{myRembutton}</button>
    </div>
  ) 
}

export default Button