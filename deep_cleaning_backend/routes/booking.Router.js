import  bookingController  from '../controllers/bookingController.js';
import  verifyToken  from '../middelwares/auth.middleware.js';
import getBookingsController from '../controllers/getBookingController.js';
import patchBookingStatusController from '../controllers/patchBookingStatusController.js'


import express from 'express';


const bookingRouter=express.Router();

bookingRouter.post('/bookings',verifyToken,bookingController);
bookingRouter.get('/getBookings',verifyToken,getBookingsController);
bookingRouter.patch('/updateBookingStatus/:id',verifyToken,patchBookingStatusController);

export default bookingRouter;