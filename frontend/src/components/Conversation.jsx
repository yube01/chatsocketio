import { useEffect, useState } from "react"
import "./conv.css"
import axios from "axios"




const Conversation = ({conv,currentUser}) => {


  const [user,setUser] = useState("")

  useEffect(()=>{

    const friendId  = conv.members.find((m)=> m!== currentUser._id)
    const getUser  = async()=>{
      try {

        const res = await axios("http://localhost:8080/users?userId=" + friendId)
        setUser(res.data)
      } catch (error) {
        console.log(error)
        
      }
    }
    getUser()
  },[conv,currentUser])

  return (
    <div className="conversation">
      
      <span className="conversationName">{user.username}</span>
    </div>
  )
}

export default Conversation
