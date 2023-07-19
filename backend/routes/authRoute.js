import express, { response } from "express"
import { allUser, login, register } from "../controller/user.js"
import { model } from "../model/user.js"




const router = express.Router()


router.post("/login", login)
router.post("/register", register)
router.get("/allUser",allUser)


router.post("/single",async(req,res)=>{

 

    try {

        const response = await model.findOne({username:req.body.username})
        
       if (response) {
       const { password, updatedAt, ...other } = response._doc;
       return res.json(other)
    }


        
    } catch (error) {
        console.log(error)
        
    }

})



export default router