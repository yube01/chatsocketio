import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import authRoute from "./routes/authRoute.js"
import mongoose from "mongoose"
import http from "http"
import {Server} from "socket.io"


dotenv.config()


const port = process.env.PORT

const app = express()

//connection
mongoose.connect(process.env.MONGO)
.then(()=>console.log("DB connected"))
.catch((err)=> console.log(err))


app.use(cors())
app.use(express.json())

app.use("/auth", authRoute)


const server = http.createServer(app)


const io = new Server(server,{
    pingInterval:60000,
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"]
    }
})

io.on("connection",(socket)=>{
    console.log("Connected to socket.io")


    socket.on('setup',(userData)=>{

        socket.join(userData._id)
        socket.emit('connected')

    })

})




server.listen(port, ()=>{
    console.log("Server Started")
})



