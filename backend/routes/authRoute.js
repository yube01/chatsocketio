import express from "express"
import { allUser, login, register } from "../controller/user.js"
import { protect } from "../middleware/authMiddleware.js"



const router = express.Router()


router.post("/login", login)
router.post("/register", register)
router.get("/allUser",(protect,allUser))


export default router