import express from 'express';
import { allUser, login, logout, signup } from '../controller/user.js';
import SecureRoute from '../midddleware/SecureRoute.js';
const router = express.Router();
router.post("/signup",signup);
router.post("/Login",login);
router.post("/Logout",logout);
router.get("/allUser",SecureRoute,allUser)

export default router;