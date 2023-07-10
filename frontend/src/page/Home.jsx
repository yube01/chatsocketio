import { useEffect } from "react"
import io from "socket.io-client"
import {ChatProvider} from "../context/chatProvide"
const endpoint = "http://localhost:8080"
var socket
const Home = () => {

  const {user} = ChatProvider()

  useEffect(()=>{
    socket = io(endpoint)
    socket.emit('setup',user)
    
  },[])

  return (
    <div>
      Home
    </div>
  )
}

export default Home
