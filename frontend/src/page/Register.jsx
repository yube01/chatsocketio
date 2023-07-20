import { useState } from "react"
import "./register.css"
import {Link, useNavigate} from "react-router-dom"

const Register = () => {

  const[username,setUsername] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const [err,setErr] = useState("")


  
  const navigate = useNavigate()


  const handleSubmit = async(e)=>{
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:8080/auth/register",{
      method:'POST',
      headers:{

        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        email
      })
    })

    const data = await response.json()
    

    if(data === "User created"){
      navigate("/login")
    }else{
      setErr(data)
    }
      
    
    
      
    } catch (error) {
      console.log(error)
      
    }

  }

  return (
    <div className="register">
      <h1>Register</h1>
        <form onSubmit={handleSubmit} className="r1">
      <h1 className="hj">{err }</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} name="" id="" />
      <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} name="" id="" />
      <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} name="" id="" />
      <input type="submit" value="Register" className="btn"/>
        </form>
        <Link to="/login" style={{textDecoration:"none,",color:"inherit",textDecorationLine:"none"}}>
        <h1 className="hj">Already have a account ? Login  </h1>
        
        </Link>
    </div>
  )
}

export default Register
