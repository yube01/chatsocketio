import {Chat} from "../model/chat.js" 



export const accessChat = async(req,res)=>{

    const {userId} = req.body

    if(!userId){
        console.log("UserId param not sent with request")
        return res.sendStatus(400)
    }


    var isChat =  await Chat.find({
        isGroup:false,
        $and:[
            {users:{$elemMatch:{$eq: req.user._id}}},
            {users:{$elemMatch:{$eq: userId}}}

        ]
    }).populate("users","-password")
    .populate("latestMessage")
    

    isChat = await User.populate(isChat,{
        path:"latestMessage.sender",
        select:"name email"
    })

    if(isChat.length > 0){
        res.send(isChat[0])
    } else{
        var charData ={
            chatName:"sender",
            isGroupChat:false,
            users:[req.user._id,userId] 
        }


        try {

            const createdChat = await Chat.create(charData)

            const fullChat  = await Chat.findOne({_id: createdChat._id}).populate(
                "users",
                "-password"
            )
            res.status(200).send(fullChat)
            
        } catch (error) {

            console.log(error)
            
        }
    }


}