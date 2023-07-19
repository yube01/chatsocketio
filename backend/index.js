import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import authRoute from "./routes/authRoute.js"
import userRoute from "./routes/userRoute.js"
import mongoose from "mongoose"
import http from "http"

// import chatRoute from "./routes/chatRoute.js"
import convRoute from "./routes/conversationRoute.js"
import msgRoute from "./routes/messageRoute.js"


dotenv.config()


const port = process.env.PORT

const app = express()

//connection
const db = mongoose.connect(process.env.MONGO)
.then(()=>console.log("DB connected"))
.catch((err)=> console.log(err))


app.use(cors())
app.use(express.json())

app.use("/auth", authRoute)
// app.use("/auth", chatRoute)
app.use("/auth/conv", convRoute)
app.use("/auth/msg", msgRoute)
app.use("/users",userRoute)


const server = http.createServer(app)








server.listen(port, ()=>{
    console.log("Server Started")
})



