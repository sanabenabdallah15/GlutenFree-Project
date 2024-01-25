const express=require("express")
const router=express.Router()
const Product=require('../models/Product')
const isAdmin=require('../middleweares/isAdmin')
const isAuth = require("../middleweares/isAuth")
//add product
router.post('/add',isAuth,isAdmin,async(req,res)=>{
    const{nameProduct,Category,Price,Description,image}=req.body
    console.log("Request Body:", req.body);
    let product=new Product({nameProduct,Category,Price,Description,image})
    await product.save()
    res.send({msg:"Product added successfully",product})
}
)
//delete product
router.delete('/delete/:_id',isAuth,isAdmin,async(req,res)=>{
    const {_id}=req.params
    const product= await Product.findOneAndDelete({_id})
    res.send({msg:"Product deleted",product})
})
//edit product 
router.put('/edit/:_id',isAuth,isAdmin,async(req,res)=>{
    const {_id}=req.params
    const product=await Product.findByIdAndUpdate({_id},{$set:req.body},{new:true})
    res.send({msg:'Product Modified',product})
})
//get product
router.get('/get',async(req,res)=>{
    const product=await Product.find()
    res.send({msg:"these is the product that you have",product})
})
//get productPasta
router.get('/getPasta',async(req,res)=>{
    const product=await Product.find({"Category":"pate"})
    res.send({msg:"these is the product that you have",product})
})
//get productBreads
router.get('/getBreads',async(req,res)=>{
    const product=await Product.find({"Category":"breads"})
    res.send({msg:"these is the product that you have",product})
})
//get productchocolat
router.get('/getchocolat',async(req,res)=>{
    const product=await Product.find({"Category":"chocolat"})
    res.send({msg:"these is the product that you have",product})
})
//get productNoodels
router.get('/getNoodels',async(req,res)=>{
    const product=await Product.find({"Category":"noodels"})
    res.send({msg:"these is the product that you have",product})
})
//get producRice
router.get('/getRice',async(req,res)=>{
    const product=await Product.find({"Category":"rice"})
    res.send({msg:"these is the product that you have",product})
})
//get productDrink
router.get('/getDrink',async(req,res)=>{
    const product=await Product.find({"Category":"drink"})
    res.send({msg:"these is the product that you have",product})
})
module.exports=router