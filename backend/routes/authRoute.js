import express from "express" ;
import {
    registerController, 
    loginController, 
    testController, 
    forgotPasswordController
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

// protected route 

router.get('/user-auth', requireSignIn, (req, res)=>{
    res.status(200).send({
        ok: true
    })
} )

export default router ; 