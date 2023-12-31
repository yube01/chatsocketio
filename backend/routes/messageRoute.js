import express from "express"

import { Message } from "../model/Message.js"


const router = express.Router()

router.post("/",async(req,res)=>{

    const newMessage = new Message(req.body)

    try {

        const savedMessage = await newMessage.save()
        res.status(200).json(savedMessage)
        
    } catch (error) {
        res.status(500).json(error)
    }
})


router.get("/:conversationId",async(req,res)=>{
    try {

        const message = await Message.find({
            conversationId:req.params.conversationId

        })
        res.status(200).json(message)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})

export default router