
import express from 'express';
import authGoogleController from '../controllers/authGoogleController.js';
import loginController from '../controllers/loginController.js';



const authRouter=express.Router();


authRouter.post('/google',authGoogleController);
authRouter.post('/login',loginController);



export default authRouter;