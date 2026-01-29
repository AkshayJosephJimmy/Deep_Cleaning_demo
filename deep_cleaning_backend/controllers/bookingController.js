import prisma from '../prismaClient.js';

async function bookingController(req,res){

const details=req.body;


try{

    const newBooking= await prisma.booking.create({
       data:{
           userId:req.user.userId,
           username:details.name,
           serviceType:details.serviceType,
           address:details.address,
           phoneNum:details.phoneNum,
           email:details.email,
           date:details.date
        }
    })

    res.status(201).json({
        message:"Booking created successfully",
        booking:newBooking
    })

}
catch(err){
    console.error(err);
    res.status(500).json({
        message:"Something went wrong",
        error:err.message
    })








}
}export default bookingController;