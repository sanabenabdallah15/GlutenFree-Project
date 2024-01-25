const mongoose=require("mongoose")
const schema=mongoose.Schema

const ProductSchema=new schema({
    nameProduct:{
        type:String
    },
    Category:{
        type:String
    },
    Description:{
        type:String
    },
    Price:{
        type:Number
    },
    image:{
        type:String
    }
   
})
module.exports=Product=mongoose.model("Product",ProductSchema)