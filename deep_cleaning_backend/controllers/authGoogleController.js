import {OAuth2Client} from 'google-auth-library';
import dotenv from 'dotenv';
dotenv.config();


async function authGoogleController(req,res){


const client=new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const token=req.body.credential;



try{
const ticket=await client.verifyIdToken({
    idToken:token,
    audience:process.env.GOOGLE_CLIENT_ID
})
const payload=ticket.getPayload();
console.log(payload);
return res.status(200).json({
      message: "Google auth successful",
      user: {
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
      },
    });
}catch(err){
    return res.status(400).json({message:"Invalid token"});

}



}


export default authGoogleController;






