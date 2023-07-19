
import axios from "axios"
import { useState } from "react"


const SearchUser = ({currentUser}) => {
    const[username,setUsername] = useState("")
    const[user,setUser] = useState("")
    
    

 
    const handleSubmit = async(e)=>{
        e.preventDefault()
    
        try {
            const response = await fetch("http://localhost:8080/auth/single",{
          method:'POST',
          headers:{
    
            'Content-Type':'application/json'
          },
          body: JSON.stringify({
            username
          })
        })
    
        const data = await response.json()
        setUser(data)
       

        
            
        } catch (error) {
            console.log(error)
            
        }
    }

    const handleConv = async(e)=>{
      e.preventDefault()

      const conv = {
        senderId: currentUser._id,
        receiverId: user._id
      }
      try {
       if(conv.receiverId && conv.senderId !== null && conv.senderId  !== conv.senderId ){
        const res = await axios.post("http://localhost:8080/auth/conv",conv)
        console.log(res)
        window.location.reload(true)
       }else{
        console.log("user created")
       }
        
      } catch (error) {
        console.log(error)
        
      }
      
      
    }
    

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" value={username} onChange={(e)=>setUsername(e.target.value)} 
              placeholder="Username"/>
              <input type="submit" value="Search" />

        </form>
        <h1>{user.username}</h1>
        <button onClick={handleConv}>Make connection</button>
     
      
     
      
    </div>
  )
}

export default SearchUser
