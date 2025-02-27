import express from "express";
import { signIn, signUp } from "../controllers/login_controller.js";

const router = express.Router();  

// Définition des routes pour le signup et signin
router.route("/signup").post(signUp);
router.route("/signin").post(signIn);

export default router;
