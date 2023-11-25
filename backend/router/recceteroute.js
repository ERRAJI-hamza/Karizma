import express from "express";
import { requireSignIn } from '../meddlewares/authMeddleware.js';
import {addrecetteController,recettesControlller} from "../controller/recetteController.js";


//router object
const router = express.Router();


// add module
router.post("/add-recette", requireSignIn,addrecetteController);

//getALl module
router.get("/get-recettes",requireSignIn, recettesControlller);


export default router;