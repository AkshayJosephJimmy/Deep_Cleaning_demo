
import prisma from "../prismaClient.js";
import jwtgeneration from "../utils/jwtgeneration.js";



async function loginController(req,res){

const {username,email,password}=req.body;
try{

    const user= await prisma.user.findUnique(
        {
            where:{email:email}
        }
    )
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    if(user.password!==password){
        return res.status(401).json({message:"Invalid credentials"})
    }
    const token=jwtgeneration(user);
    res.status(200).json({message:"Login successful",user,token})
}catch(err){
    console.error(err);
    res.status(500).json({message:"Something went wrong",error:err.message})
}
    

}
export default loginController;