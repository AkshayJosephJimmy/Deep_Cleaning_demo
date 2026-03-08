
import express from 'express';
import authGoogleController from '../controllers/authGoogleController.js';
import loginController from '../controllers/loginController.js';
import signUpController from '../controllers/signUpController.js';



const authRouter=express.Router();


authRouter.post('/google',authGoogleController);
authRouter.post('/login',loginController);
authRouter.post('/signup',signUpController);



export default authRouter;