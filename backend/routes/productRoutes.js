
import express from 'express' ; 
import {isAdmin, requireSignIn} from '../middleware/authMiddleware.js' ; 
import { 
    createProductController, 
    getProductController,
    getSingleProductController,
    productPhotoController,
    deleteProductController,
    updateProductController
} from '../controllers/productController.js';
import formidable from 'express-formidable' ; 

const router = express.Router() ; 

// Create product || POST 

router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController) ;

// Get products || GET 

router.get('/get-product', getProductController)

// Get single product 

router.get('/get-product/:slug', getSingleProductController)

// Get photo 

router.get('/product-photo/:pid', productPhotoController) ;

// DELETE product 

router.delete('/delete-product/:pid', deleteProductController) ; 

// Update product 

router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController) ; 

export default router ; 