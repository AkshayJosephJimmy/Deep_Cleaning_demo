import prisma from "../prismaClient.js";


async function patchBookingStatusController(req,res){

   const {id}=req.params;
   const {bookingStatus}=req.body;
try{

    const updatedUser=await prisma.booking.update({
        where:{
            id:id
        },
        data:{
            bookingStatus:bookingStatus
        }
    })
    res.json(updatedUser);
}catch(err){

res.status(400).json({message:"error while updating",error:err.message})

}




}
export default patchBookingStatusController