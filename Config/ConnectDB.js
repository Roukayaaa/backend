//require moongose
const mongoose=require("mongoose")
// conect function
const connect =async()=>{
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log ("connected to data base")
    } catch (error) {
        console.log(error)
        
    } 
}
module.exports=connect