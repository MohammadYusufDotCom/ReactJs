
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import ContextProvider from './context/ContextProvider'

function App() {
  

  return (
    <ContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </ContextProvider>
  )
}

export default App