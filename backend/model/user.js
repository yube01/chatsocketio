import mongoose from "mongoose";

const User = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
},{
    collection:'user-data'
})


export const model = mongoose.model("UserData", User)

