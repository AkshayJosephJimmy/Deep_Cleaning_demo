import prisma from '../prismaClient.js';


async function deleteBookingController(req,res){

   const {id}=req.params;
   try{

       const deletedBooking=await prisma.booking.delete({
           where:{
               id:id
            }
        })
        res.json({message:"Booking deleted successfully",booking:deletedBooking})
   }catch(err){
       res.status(400).json({message:"Error while deleting booking",error:err.message})
    }






}
export default deleteBookingController;