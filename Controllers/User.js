const User = require("../Models/User");
const asyncHandler = require("express-async-handler");
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken")
// creat user 

exports.CreatUser = asyncHandler(async (req, res) => {
  try {
    const {firstname,lastname,email,mobile,password}=req.body
  const findUser = await User.findOne({ email: email });

  if (!findUser) {
    //create
    const salt=10  
    const hashedPassword=await bcrypt.hash(password,10)
    const newUser=new User({...req.body})
    newUser.password=hashedPassword
    await newUser.save()
    const token=jwt.sign({
      id:newUser._id
    },process.env.SECRET_KEY)
    res.status(200).send({msg:"new user registred succesfully",newUser,token})
  } else {   
    //user exist
    res.status(400).send({msg:"user exist"})
  }
  } catch (error) {
    res.status(500).send({msg:"error en register",error})
    console.log(error)
  }


});
/// change password
exports.changePassword=async(req,res)=>{
  try {
    const{_id}=req.params
    const{password}=req.body
    const salt=10
    const hashedPassword=await bcrypt.hash(password,salt)
    await User.updateOne({_id},{$set:{password:hashedPassword}})
    res.status(200).send({msg:"password updated"})
  } catch (error) {
    res.status(500).send({msg:"error on changing password"})
    console.log(error)
  }
}

//login
exports.loginuser=asyncHandler(async(req,res)=>{
  try {
    const {email,password}=req.body;
    // check if user exist
   const finduser = await User.findOne({ email });
   if (finduser) {
     const isMatched = await bcrypt.compare(password, finduser.password);
     if (isMatched) {
       res.status(200).send({msg:"login in succesfuly ",finduser})
     } else {
       res.status(400).send({msg:"email or passowrd not correct"})
     }
   } else {
    res.status(400).send({msg:"email or passowrd not correct"})
   }
    
  } catch (error) {
    res.status(500).send({msg:"error on login"})
  }

}); 

