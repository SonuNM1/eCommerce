import express from "express";

const router = express.Router();

import { getAllUsersController } from "../controllers/userController.js";
import { requireSignIn, isAdmin } from "../middleware/authMiddleware.js";


router.get("/all-users", requireSignIn, isAdmin, getAllUsersController);

export default router;
