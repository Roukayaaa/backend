// require express
const express=require('express');
const connect = require('./Config/ConnectDB');
const UserRoutes=require('./Routes/UserRoutes');
//creat port
require('dotenv').config()
// create instance
const app=express()
//Connection to DB
connect()
//midlle ware
app.use(express.json())



const port=process.env.port
// create server
app.listen (port,(error)=>{  
    error?console.log(error):
    console.log (`the server is running on port:${port}`);
}) 
  
app.use('/api/user',UserRoutes)

 
app.use('/api/product',require('./Routes/ProductRoutes'))    
//
 