import mongoose from "mongoose";

const chat = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        index: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        index: true
    },
    message: {
        text: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        }
    },
    seen: {
        type: Boolean,
        default: false
    }

},{
    timestamps:true
})

export const chatModel = mongoose.model("Chat", chat)
