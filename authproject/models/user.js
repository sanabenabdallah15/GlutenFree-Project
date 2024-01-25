const mongoose=require("mongoose")
const schema=mongoose.Schema

const UserSchema=new schema({
    name:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String,

    },
    password:{
        type:String
    },
    adresse:{
        type:String
    },
    telephone:{
        type:String
    },
    role:{ 
        type: String, 
        enum: ['user','admin'],
         default: 'user' 
        },

})


module.exports=User=mongoose.model("Users",UserSchema)