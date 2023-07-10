import { useState } from "react"

const Register = () => {

  const[username,setUsername] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")


  const handleSubmit = async(e)=>{
    e.preventDefault()

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
    console.log(data)

  }

  return (
    <div>
      <h1>Register</h1>
        <form onSubmit={handleSubmit}>

      <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} name="" id="" />
      <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="" id="" />
      <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="" id="" />
      <input type="submit" value="Register"/>
        </form>
    </div>
  )
}

export default Register
