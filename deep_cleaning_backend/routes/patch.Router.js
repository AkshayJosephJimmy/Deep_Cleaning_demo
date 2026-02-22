
import express from 'express';

import cors from 'cors';
import patchBookingStatusController from '../controllers/patchBookingStatusController.js';    

const patchRouter=express.Router();

patchRouter.put('/updateBookingStatus/:id',patchBookingStatusController);

export default patchRouter;