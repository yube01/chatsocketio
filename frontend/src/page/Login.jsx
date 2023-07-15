import { useState } from "react"

import {useNavigate} from "react-router-dom"


const Login = () => {
  const [ username, setUsername] = useState("")
  const [password ,setPassword] = useState("")
 


  const navigate = useNavigate()


  const handleLogin = async(e)=>{
    e.preventDefault()

  try {
    const response = await fetch("http://localhost:8080/auth/login",{
      method:'POST',
      headers:{

        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })

    const data = await response.json()
  
      
    if(data === "Password incorrect" || data === "User isn't created"){
      return console.log(data)
    }else{
      localStorage.setItem("user",JSON.stringify(data))
      navigate("/")
    }
    
  } catch (error) {
    console.log(error)
    
  }
    
    

    
  }

  return (
    <div>
    <h1>Login</h1>
        <form onSubmit={handleLogin}>

      <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} name="" id="" />
    
      <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="" id="" />
      <input type="submit" value="Login"/>
        </form>
    </div>
  )
}

export default Login
