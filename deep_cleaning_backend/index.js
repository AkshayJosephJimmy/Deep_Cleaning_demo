import express from 'express';
import  authGoogleRouter from './routes/authGoogle.js';


const app=express();
const PORT=3000;




authGoogleRouter(app);

app.listen(PORT,()=>{


    console.log(`Server is running on port ${PORT}`);
    


});


