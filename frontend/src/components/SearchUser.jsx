
import { useState } from "react"


const SearchUser = () => {
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
    

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" value={username} onChange={(e)=>setUsername(e.target.value)} 
              placeholder="Username"/>
              <input type="submit" value="Search" />
        </form>
      <h1>{user.username}</h1>
     
      
     
      
    </div>
  )
}

export default SearchUser
