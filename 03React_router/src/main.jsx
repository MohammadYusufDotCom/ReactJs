import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from "./Componant/Home.jsx" 
import About from "./Componant/About" 
import Contact from './Componant/Contact.jsx'
import User, { loaderforgithub } from './Componant/Userj.jsx'
import Github from './Componant/Github.jsx'

// const router =  createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"/About",
//         element:<About/>
//       },
//       {
//         path:"/Contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>

      <Route path='user/:greeting' 
      element={<User/>}
      loader={loaderforgithub}/>

      <Route path='Contact' element={<Contact/>}/>
      
      <Route 
      path='github' 
      element={<Github/>}
      />

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
