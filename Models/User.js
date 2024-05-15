const mongoose = require('mongoose'); // Erase if already required
const bcrypt=require('bcrypt');
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        
    },
    lastname:{
        type:String,
        required:true,
        
    },
    email:{ 
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:Number,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
    },
});
module.exports = mongoose.model('User', userSchema);  
userSchema.pre("save",async function (next) {
    const salt=await bcrypt.genSaltSync(10);
    this.password=await bcrypt.hash(this.password.salt);
    
});
userSchema.methods.isPasswordMatched =async function(entreredPassword){
    return await bcrypt.compare(entreredPassword,this.password);
}