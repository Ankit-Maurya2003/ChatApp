import express from 'express';
import { getMessage, sendMessage } from '../controller/messagecontroller.js';
import SecureRoute from '../midddleware/SecureRoute.js';

const router = express.Router();
router.post("/send/:id",SecureRoute,sendMessage);
router.get("/get/:id",SecureRoute,getMessage);

export default router;
