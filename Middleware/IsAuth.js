const jwt=require("jsonwebtoken")


exports.isAuth=async(req,res,next)=>{
    try {
        const token=req.headers(('authorization'))
if (!token){
    res.status(400).send({msg:"not authorized"})
}
const verif=jwt.verif(token,process.env.SECRET_KEY)  
const foundUser=await User.findOne({_id:verif.id})
     if (!foundUser) {
        res.status(400).send({msg:"not authorized"})
    }else{
        req.user=foundUser
        next()
    }
}catch(error){
res.status(500).send({msg:"error on auth",error})
} 
    
}