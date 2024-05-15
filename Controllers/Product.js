const Product=require("../Models/Product")

// add new product
exports.addproduct=(req,res)=>{
    try {
        const{title,description,price,posturl}=req.body
        const newProduct=new Product({title,description,price,posturl})
        newProduct.save()
        res.status(200).send({msg:"product added"})
    } catch (error) {
        res.status(500).send({msg:"error",error})
    }
}
// delete product
exports.deletproduct=async(req,res)=>{
    try {
        const{_id}=req.params
        await Product.deleteOne({_id})
        res.status(200).send({msg:"product deleted"})
    } catch (error) {
        res.status(500).send({msg:"error",error})
    }
}
//get 
exports.getproduct=async(req,res)=>{
    try {
       const foundProduct=await Product.find()
        res.status(200).send({msg:"product found",foundProduct})
    } catch (error) {
        res.status(500).send({msg:"error",error})
    }
} 