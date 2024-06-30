import { useState } from 'react'
import './App.css'
import AddTodo from './component/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTodo/>
      <AddTodo />
    </>
  )
}

export default App
