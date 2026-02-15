import prisma from '../prismaClient.js';



async function getBookingsController(req, res) {
    try{

        const bookings = await prisma.booking.findMany({
            include:{user:true}
        });
        console.log("Bookings retrieved:", bookings);
        res.json(bookings);
    }catch(error){
        console.error("Error retrieving bookings:", error);
        res.status(500).json({ error: 'Failed to retrieve bookings' });
    }
}

export default getBookingsController;