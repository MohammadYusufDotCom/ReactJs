import React from 'react'
import { useSelector, useDispatch } from "react-redux" 
import { removeTodo, toggleTodo, valuesInEditTodoHandle } from '../todoSlice/todoSlice'

function Todo() {
  const todos = useSelector(state => state.todos)
  const todoEditable = useSelector(state => state.todoEditable)
  const valuesInEdit = useSelector(state => state.valueInEditTodo)
  const dispatch = useDispatch()


  const updateTodo =(text,id)=>{
    dispatch(toggleTodo())
    console.log(text,id);
    dispatch(valuesInEditTodoHandle({id,text}))
  } 

  return (
    <>
    <div className='mb-4'>
    <ul className="list-none ">
        {todos.map((todo) => (
          <li
            className={`mt-4 flex justify-between items-center ${valuesInEdit.id == todo.id?'bg-slate-500': 'bg-slate-800'} px-4 py-2 rounded-xl`}
            key={todo.id}
          >
            <div className={`text-white`}>{todo.text}</div>
            <div className='flex gap-2 '>
            <button className={`text-white ${todoEditable? 'bg-red-300':'bg-red-500 hover:bg-red-600'} border-0 py-1 px-4 focus:outline-none  rounded text-md`}
            onClick={()=>updateTodo(todo.text,todo.id)}
            disabled={todoEditable}
            >
              Edit
              </button>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </>
  )
}

export default Todo