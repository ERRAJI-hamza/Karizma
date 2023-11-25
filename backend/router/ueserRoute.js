import express from "express";
import {
  loginController,
  registerController
} from "../controller/authController.js";
import { requireSignIn } from "../meddlewares/authMeddleware.js";


//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);
//LOGIN || POST
router.post("/login", loginController);

export default router;