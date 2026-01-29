import  bookingController  from '../controllers/bookingController.js';
import  verifyToken  from '../middelwares/auth.middleware.js';


import express from 'express';


const bookingRouter=express.Router();

bookingRouter.post('/bookings',verifyToken,bookingController);

export default bookingRouter;