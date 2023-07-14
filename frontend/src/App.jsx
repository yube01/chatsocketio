
import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from './page/Login'
import Register from './page/Register'
import Home from './page/Home'

function App() {





  const router = createBrowserRouter([
    {
      path:"/login",
      element:<Login/>

    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/",
      element:<Home/>
    }
  ])
  

  return (
    <>
    <RouterProvider router = {router}/> 
      
    </>
  )
}

export default App
