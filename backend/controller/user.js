import { model } from "../model/user.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const login = async(req,res)=>{

  try{

    // finding user name in database
const user = await model.findOne({username:req.body.username})
if(!user) return res.json("User isn't created")


// matching password with user name which is already stored in database
const correctPassword = await bcrypt.compare(req.body.password, user.password)
if(!correctPassword) return res.status(400).json("Password incorrect")

const token = jwt.sign({id:user._id},process.env.JWT);

//preventing the access of hashed password
const{password, ...others} = user._doc;

// for security purpose
//npm add cookie-parser for adding  cookie library
res.cookie("access_token",token,{
    httpOnly: true

}).status(200)
  .json(others)


}
catch(error){
    console.log(error)

}

}


export const register = async(req,res) =>{


  try{
    const salt = bcrypt.genSaltSync(10);
    // encrypting the password
    // npm add bcryptjs
    const hash = bcrypt.hashSync(req.body.password,salt);
    const newUser = new model ({...req.body , password:hash});

// saving data to mongodb
 await newUser.save()
 res.status(200).send("User has been created!!")
}
catch(error){
    console.log(error)

}

   
}
//auth/allUser?search=(keyword)
// with jwt = .find({_id:{$ne: req.user._id}})
export const allUser = async(req,res)=>{

  const keyword = req.query.search ?{
    $or:[
      {username:{$regex: req.query.search, $options:"i"}},
      {email:{$regex: req.query.search, $options:"i"}}
    ]
  }: {}

  const user = await model.find(keyword)
  res.status(200).send(user)

}

