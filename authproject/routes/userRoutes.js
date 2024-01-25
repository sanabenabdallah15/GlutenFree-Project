const express=require("express")
const router=express.Router()
const User=require("../models/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const isAuth=require("../middleweares/isAuth")
const {loginRules,registerRules,validator} =require("../middleweares/validator")
const isAdmin = require('../middleweares/isAdmin');
//register User
router.post("/register",registerRules(),validator,async(req,res)=>{
    const{name,email,lastName,password,adresse,telephone}=req.body
    const { role } = req.body;

    let user=await User.findOne({email})
    if(user){
        return res.send({msg:"email already exists"})
    }
user=new User({name,email,lastName,password,adresse,telephone})


const salt=10

const hashedPassword= await bcrypt.hash(password,salt)
user.password=hashedPassword
user.role = role;
await user.save()

const payload={
    id:user._id
}
const token=jwt.sign(payload,"fghgdf",{expiresIn:"7 days"})

res.send({msg:"user created successfuly !! ",user,token})

})

//login user
router.post("/login",loginRules(),validator,async(req,res)=>{
    const{email,password}=req.body

let user=await User.findOne({email})

if(!user){
    return res.send({msg:"bad credentials !"})
}

const  passwordMatch=await bcrypt.compare(password,user.password)
if(!passwordMatch){
return res.send({msg:"bad credentials !"})
}

const payload={
    id:user._id
}
const token=jwt.sign(payload,"fghgdf",{expiresIn:"7 days"})

res.send({msg:`Si ${user.name} is connected`,user,token})

})

//get authorized user

router.get("/user",isAuth,(req,res)=>{
res.send({user:req.user})

})
//edit user 
router.put('/edit/:_id',isAuth,async(req,res)=>{
    const{_id}=req.params
    let user=await User.findByIdAndUpdate({_id},{$set:req.body},{new:true})
    res.send({msg:"user updated",user})
})



module.exports=router