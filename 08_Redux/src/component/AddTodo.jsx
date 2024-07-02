import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addTodo, removeTodo, toggleTodo,updateTodo } from '../todoSlice/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const todoEditable = useSelector(state => state.todoEditable)
  const valuesInEditTodo = useSelector(state => state.valueInEditTodo)

  const dispatch = useDispatch()

  useEffect(() => {
   if (todoEditable){
    setInput(valuesInEditTodo.text)
   }
   else{
    setInput('')
   }
  
  }, [todoEditable,valuesInEditTodo])
  

  const addTodoHandler = (e)=>{
    e.preventDefault()
    console.log("add  called : "+todoEditable );
    if (!input) return
    dispatch(addTodo(input))
    setInput('')
  }
  const editTodoHandler =(e)=>{
    e.preventDefault();
    dispatch(toggleTodo())
    dispatch(updateTodo({newtext:input,id:valuesInEditTodo.id}))
    // console.log("Save called : "+ valuesInEditTodo.id +" "+  input);
  }

  return (
    <form onSubmit={(e)=>todoEditable ?editTodoHandler(e) : addTodoHandler(e)} className="space-x-2 mt-7">
      <input
        type="text"
        className="bg-gray-800 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-white text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out md:w-2/4"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg"
      >
        {todoEditable?"Save" :"Add Todo"}
      </button>
    </form>
  )
}
export default AddTodo