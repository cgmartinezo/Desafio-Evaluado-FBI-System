import { Router } from "express";
import { signIn, verifyUserToken } from "../controllers/agentesController.js";

const router = Router();

router.get('/SignIn', signIn)

router.get('/Dashboard', verifyUserToken)



export default router;

