import axois from "axios"
import { useEffect, useState } from "react"
import ChatOnline from "../components/ChatOnline"
import Conversation from "../components/Conversation"
import Message from "../components/Message"
import Topbar from "../components/Topbar"
import "../components/componentStyle.css"



 
const Home = () => {



  const [conv, setConv] = useState([])
  const user = JSON.parse(localStorage.getItem("user")) || null
  const[currentChat,setCurrentChat] = useState(null)
  const[msg,setMsg] = useState([])



  useEffect(()=>{
    const getConv  = async ()=>{
      try {
        const response = await axois.get("http://localhost:8080/auth/conv/" + user._id)
        setConv(response.data)
      } catch (error) {
        console.log(error)
        
      }

    }
    getConv()

  },[user._id])


  useEffect(()=>{
    const getMsg = async()=>{
      try {
        const res = await axois.get("http://localhost:8080/auth/msg/" + currentChat?._id)
        setMsg(res.data)
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getMsg()
  },[currentChat])




  return (
    <div>
     <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
           {conv.map((c)=>(
                 <div onClick={()=>setCurrentChat(c)}> 
                  <Conversation conv={c} currentUser = {user}/>
                  </div>

           ))}
            
           
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
          
          {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {msg.map((m) => (
                    <div >
                      <Message message={m} own={m.sender === user._id}/>
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                  
                  ></textarea>
                  <button className="chatSubmitButton">
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
            
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline
             
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
