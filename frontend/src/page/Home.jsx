import ChatOnline from "../components/ChatOnline"
import Conversation from "../components/Conversation"
import Message from "../components/Message"
import Topbar from "../components/Topbar"
import "../components/componentStyle.css"


 
const Home = () => {





  return (
    <div>
     <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
           
              <div>
                <Conversation />
              </div>
           
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
          
              <>
                <div className="chatBoxTop">
                
                    <div >
                      <Message />
                    </div>
               
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    
                  ></textarea>
                  <button className="chatSubmitButton" >
                    Send
                  </button>
                </div>
              </>
          
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            
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
