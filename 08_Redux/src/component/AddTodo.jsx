import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, removeTodo } from '../todoSlice/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const addTodoHandler = (e)=>{
    e.preventDefault()
    console.log(input);
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <form onSubmit={addTodoHandler} className="space-x-2 mt-7">
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
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo