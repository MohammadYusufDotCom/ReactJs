import './App.css'
import ContexProvider from './contex/contexProvider';
import Login from './componants/Login';
import Profile from './componants/Profile';

function  App() {
  return (
    <ContexProvider>
      <h1>Login form</h1>
      <Login/>
      <Profile/>
    </ContexProvider>
  )
}

export default App;