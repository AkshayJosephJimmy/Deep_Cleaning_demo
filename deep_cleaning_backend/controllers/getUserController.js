import prisma from "../prismaClient.js";


async function getUserController(req, res) {
    console.log("hello from getUserController");
try{

    const user= await prisma.user.findUnique({where:{id:req.user.userId}})
    res.status(200).json( user ) 
}catch(err){ console.error(err); res.status(500).json({message:"Something went wrong", error:err.message})

    
}






}
export default getUserController;