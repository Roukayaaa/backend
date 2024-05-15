//require mongoose
const mongoose=require("mongoose")
const { title } = require("process")
//create schema
const schema=mongoose.Schema

const ProductSchema=new schema({

    title:{
        type:String, 
        required:true,
    },
    description:{
        type:String,
        
    },
    price:{ 
        type:Number,

        required:true,
    },
    posturl:{
        type:String,
        required:true,
    }


}

)
module.exports=connect=mongoose.model("product",ProductSchema)