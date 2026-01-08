import {OAuth2Client} from 'google-auth-library';
import dotenv from 'dotenv';
dotenv.config();
import prisma from '../prismaClient.js';




async function authGoogleController(req,res){


const client=new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const token=req.body.credential;
console.log('Token received:', token);
let payload;





try{
const ticket=await client.verifyIdToken({
    idToken:token,
    audience:process.env.GOOGLE_CLIENT_ID
})
 payload=ticket.getPayload();
}catch(err){
    return res.status(400).json({message:"Invalid token"});

}


     
   try {
  const user = await prisma.user.findUnique({
    where: { email: payload.email }
  });

  if (user) {
    
    return res.status(200).json({ message: "User already exists", user });
  }

  const newUser = await prisma.user.create({
    data: {
      email: payload.email,
      username: payload.name,
      profile_pic: payload.picture,
      auth_provider: 'google',
      password: "" // No password for Google-authenticated users,

    }
  });
  

  return res.status(201).json({ message: "User created successfully", newUser });

} catch (err) {
  console.error(err);
  return res.status(500).json({ message: "Something went wrong",error:err });
}




}


export default authGoogleController;






