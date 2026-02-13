
import express from 'express';
import authGoogleController from '../controllers/authGoogleController.js';


const authRouter=express.Router();


authRouter.post('/google',authGoogleController);



export default authRouter;