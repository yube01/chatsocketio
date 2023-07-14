import { useContext, useRef} from "react"

// import {useNavigate} from "react-router-dom"
import { loginCall } from "./apiCalls"
import { AuthContext } from "../context/AuthContext"

const Login = () => {
  // const [ username, setUsername] = useState("")
  // const [password ,setPassword] = useState("")
 
  
 
  const username = useRef()
  const password = useRef()

  const {user, isFetching,error,dispatch} = useContext(AuthContext)


  // const navigate = useNavigate()


  const handleLogin = async(e)=>{
    e.preventDefault()
    loginCall({username:user.current.value, password:password.current.value}, dispatch)

    console.log(user)

  try {
    // const response = await fetch("http://localhost:8080/auth/login",{
    //   method:'POST',
    //   headers:{

    //     'Content-Type':'application/json'
    //   },
    //   body: JSON.stringify({
    //     username,
    //     password
    //   })
    // })

  //   const data = await response.json()
  
      
  //   if(data === "Password incorrect" || data === "User isn't created"){
  //     return console.log(data)
  //   }else{
      
  //     navigate("/")
  //   }
    
  } catch (error) {
    console.log(error)
    
  }
    
    

    
  }

  return (
    <div>
    <h1>Login</h1>
        <form onSubmit={handleLogin}>

      <input type="text" placeholder="username" ref={username}  />
    
      <input type="password" placeholder="password" ref={password} />
      <input type="submit" value={isFetching ? "Loading" :"Log In"}/>
        </form>
    </div>
  )
}

export default Login
