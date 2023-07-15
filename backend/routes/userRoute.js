import Express  from "express";
import {model} from "../model/user.js"

const router = Express.Router()

router.get("/",async(req,res)=>{
    const userId = req.query.userId
    const username = req.query.username

    try {
        const user = userId ? await model.findById(userId)
        : await model.findOne({username:username})
        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})

export default router