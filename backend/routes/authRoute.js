import express from "express" ;
import {registerController, loginController, testController} from '../controllers/authController.js' ; 
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

const router = express.Router() ; 

// REGISTER || POST 

router.post('/register', registerController) ; 

// LOGIN || POST 

router.post('/login', loginController) ; 

// test route 

router.get('/test', requireSignIn, isAdmin, testController)

// protected route 

router.get('/user-auth', requireSignIn, (req, res)=>{
    res.status(200).send({
        ok: true
    })
} )

export default router ; 