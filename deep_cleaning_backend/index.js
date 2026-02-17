import express from 'express';

import cors from 'cors';
import authRouter from './routes/auth.Router.js';
import bookingRouter from './routes/booking.Router.js'
import userRouter from './routes/user.Router.js';


const app=express();
const PORT=5001;






app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE","OPTIONS", "PATCH"],
        allowedHeaders: ["Authorization", "Content-Type"],
        
        
    })
);
app.options("*", cors()); 

app.use(express.json());
app.use('/auth',authRouter);
app.use('/user',userRouter);
app.use('/api',bookingRouter)



app.listen(PORT,()=>{


    console.log(`Server is running on port ${PORT}`);
    


});


