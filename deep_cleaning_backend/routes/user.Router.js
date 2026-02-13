import express from "express";
import getUserController from "../controllers/getUserController.js";
import verifyToken from "../middelwares/auth.middleware.js";


const userRouter=express.Router();

userRouter.get('/me', verifyToken,getUserController);

export default userRouter;