import  Express from "express";
import { accessChat } from "../controller/chat.js";

import { protect } from "../middleware/authMiddleware.js";


const router = Express.Router()


router.post("/access", (protect,accessChat))


export default router
