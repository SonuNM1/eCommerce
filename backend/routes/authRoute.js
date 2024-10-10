import express from "express" ;
import {
    registerController, 
    loginController, 
    testController, 
    forgotPasswordController,
    updateProfileController,
    getOrdersController,
    getAllOrdersController,
    orderStatusController
} from '../controllers/authController.js' ; 

import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

const router = express.Router() ; 

// REGISTER || POST 

router.post('/register', registerController) ; 

// LOGIN || POST 

router.post('/login', loginController) ; 

// Forgot password || POST 

router.post('/forgot-password', forgotPasswordController) ; 

// test route 

router.get('/test', requireSignIn, isAdmin, testController)

// protected route - User

router.get('/user-auth', requireSignIn, (req, res)=>{
    res.status(200).send({
        ok: true
    })
} )

// protected route - Admin 

router.get('/admin-auth', requireSignIn, isAdmin, (req, res)=>{
    res.status(200).send({
        ok: true
    })
} )

// Update profile 

router.put('/profile', requireSignIn, updateProfileController)

// Orders 

router.get('/orders', requireSignIn, getOrdersController)

// All Orders 

router.get('/all-orders', requireSignIn, isAdmin, getAllOrdersController)


// Order status update 

router.put('/order-status/:orderId', requireSignIn, isAdmin, orderStatusController) ; 

export default router ; 