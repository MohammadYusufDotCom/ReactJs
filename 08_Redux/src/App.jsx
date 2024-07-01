import { useState } from 'react'
import './App.css'
import AddTodo from './component/AddTodo'
import Todo from './component/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='shadow-md pb-[1px] px-3'>
    <div className='text-3xl text-white' >Todos With Redux</div>
      <AddTodo />
      <Todo/>
    </div>
    </>
  )
}

export default App
