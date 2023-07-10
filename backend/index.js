import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import authRoute from "./routes/authRoute.js"
import mongoose from "mongoose"

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




app.listen(port, ()=>{
    console.log("Server Started")
})