import express from "express"
import { allUser, login, register } from "../controller/user.js"


const router = express.Router()


router.post("/login", login)
router.post("/register", register)
router.get("/allUser",allUser)


export default router