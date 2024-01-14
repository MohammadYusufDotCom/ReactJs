import { useState } from 'react'
import './App.css'

function App() {
 let [color, setColor] = useState("#212121")
 
//  document.querySelector(":root").style.backgroundColor= color
  function colorChange(getcolor){
     
    setColor(getcolor)
  }
  return (
  
      <div className=' w-full h-screen flex justify-center ' style={{backgroundColor: color}}>
        <div className=' fixed  flex flex-wrap gap-2 justify-center items-center bottom-12  p-2 bg-slate-50 rounded-2xl  '>

        <button className=' bg-green-300 text-black  p-2 rounded-full' onClick={()=>(colorChange('Green'))} >Green</button>
        <button className=' bg-red-300 text-black p-2  rounded-full' onClick={()=>(colorChange('Red'))} >Red</button>
        <button className=' bg-blue-300 text-black p-2  rounded-full' onClick={()=>(colorChange('Blue'))} >Blue</button>
        <button className=' bg-yellow-300 text-black p-2  rounded-full' onClick={()=>(colorChange('Yellow'))} >Yellow</button>
        <button className=' bg-purple-300 text-black p-2  rounded-full' onClick={()=>(colorChange('Purple'))} >Purple</button>
        <button className=' bg-pink-300 text-black p-2 rounded-full' onClick={()=>(colorChange('Pink'))} >Pink</button>
        <button className=' bg-orange-300 text-black p-2 rounded-full' onClick={()=>(colorChange('Orange'))} >orange</button>
        <button className=' bg-lime-300 text-black p-2 rounded-full' onClick={()=>(colorChange('lime'))} >lime</button>
        <button className=' bg-amber-600 text-black p-2  rounded-full' onClick={()=>(colorChange('#d97706'))} >amber</button>
        <button className=' bg-sky-400 text-black p-2 rounded-full' onClick={()=>(colorChange('#38bdf8'))} >skyblue</button>
        </div>

      </div>

  )
}

export default App
