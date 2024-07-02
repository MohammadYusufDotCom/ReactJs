
import './App.css'
import AddTodo from './component/AddTodo'
import Todo from './component/Todo'

function App() {
  return (
    <>
    <div className='shadow-md pb-[1px] px-3'>
    <div className='text-3xl text-white' >Todos With Redux Mohammad Yusuf</div>
      <AddTodo/>
      <Todo/>
    </div>
    </>
  )
}

export default App
