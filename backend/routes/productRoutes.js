
import express from 'express' ; 
import {isAdmin, requireSignIn} from '../middleware/authMiddleware.js' ; 
import { 
    createProductController, 
    getProductController,
    getSingleProductController,
    productPhotoController,
    deleteProductController,
    updateProductController,
    productFiltersController,
    productCountController,
    productListController,
    searchProductController,
    relatedProductController,
    productCategoryController,
    braintreeTokenController,
    brainTreePaymentController
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

// filter products 

router.post('/product-filters', productFiltersController)

// product count 

router.get('/product-count', productCountController) ; 

// product per page 

router.get('/product-list/:page', productListController) ; 

// Search product 

router.get('/search/:keyword', searchProductController) ; 

// Similar products 

router.get('/related-product/:cid', relatedProductController) ; 

// Category wise product 

router.get('/product-category/:slug', productCategoryController)

// Payments route - token 

router.get('/braintree/token', braintreeTokenController)

// Payments 

router.post('/braintree/payment', requireSignIn, brainTreePaymentController) ; 

export default router ; 
