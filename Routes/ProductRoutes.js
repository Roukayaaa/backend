const express = require('express');
const { addproduct, deletproduct, getproduct } = require('../Controllers/Product');

// import Router from express
const router = express.Router();

// add a new product
router.post('/addProduct', addproduct);
// edit product
router.delete('/deleteproduct/:_id', deletproduct);
// get product 
router.get('/getProduct', getproduct);
 
module.exports = router;
