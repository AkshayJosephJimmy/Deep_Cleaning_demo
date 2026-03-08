import prisma from '../prismaClient.js';


async function signUpController(req,res){

const {username,email,password}=req.body;
try{
const user=await prisma.user.create({
    data:{
        email:email,
        username:username,
        password:password,
        auth_provider:"local",
        role:"customer"
    }
})
res.status(201).json({message:"User created successfully", userId:user.id});
}
catch(error){
    console.error("Sign Up error:", error);
    res.status(500).json({message:"Internal Server Error"});
}
}
export default signUpController;