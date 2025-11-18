import  authGoogleController  from '../controllers/authGoogleController.js';



function authGoogleRouter(app) {

    app.post('/google-auth', authGoogleController);
  
}

export default authGoogleRouter;







