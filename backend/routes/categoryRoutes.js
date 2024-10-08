import express from 'express' ; 
import {isAdmin, requireSignIn} from './../middleware/authMiddleware.js' ; 
import { 
    createCategoryController,
    updateCategoryController,
    categoryController,
    singleCategoryController,
    deleteCategoryController
} from '../controllers/categoryController.js';

const router = express.Router() ;

// Create category 

router.post('/create-category', requireSignIn, isAdmin, createCategoryController) ; 

// Update category 

router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController)

// get all category 

router.get('/get-category', categoryController)

// GET individual category 

router.get('/single-category/:slug', singleCategoryController)

// delete category 

router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController) ; 

export default router ; 