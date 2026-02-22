
import useBookingData from "../hooks/useBookingData";
import { useState } from "react";
import axios from 'axios'
import { MdDeleteForever } from "react-icons/md";
function BookingTable() {
  const [deleteBooking,setDelete]=useState(false);

  const {bookings,setBookings}=useBookingData();

  console.log("Bookings in Dashboard:", bookings);
  console.log("Status",bookings.bookingStatus);
  const [selectedStatus, setSelectedStatus] = useState("pending");

  const handleStatusChange=(bookingId, newStatus)=>{
    console.log(`Changing status of booking ${bookingId} to ${newStatus}`);
    console.log("Token being sent:", localStorage.getItem("token"));

    axios.put(`https://deep-cleaning-backend.onrender.com/patch/updateBookingStatus/${bookingId}`, {
        //updateBookingStatus
    
        bookingStatus: newStatus
    }, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
    ).then((response)=>{
        console.log("Status updated successfully:", response.data);
        setSelectedStatus(newStatus);
        setBookings(prevBookings => prevBookings.map(booking => {
            if (booking.id === bookingId) {
                return { ...booking, bookingStatus: newStatus };
            }
            return booking;
        }));

        

    }).catch((error)=>{
        console.error("Error updating status:", error);
        alert("Failed to update booking status. Please try again.");
    });
}

const handleDeleteBooking=(bookingId)=>{

axios.delete(`https://deep-cleaning-backend.onrender.com/api/deleteBooking/${bookingId}`,{
  headers:{
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }

}).then((response)=>{
    console.log("Booking deleted successfully:", response.data);
    setBookings(prevBookings => prevBookings.filter(booking => booking.id !== bookingId));
}).catch((error)=>{
    console.error("Error deleting booking:", error);
    alert("Failed to delete booking. Please try again.");
})
}
    

  


  return (
    <div>
      
       <table className="gap-3 border-collapse border border-gray-300 w-full">
        <thead className="gap-3 border-collapse border border-gray-300 w-full">
            <tr>
                <th>Customer </th>
                <th>Mobile Number</th>
                <th>Customer Email</th>
                <th>Service Type</th>
                <th>Booking Date</th>
                <th>Booking Status</th>
                <th>Address</th>
            </tr>
            
        </thead>
        <tbody className="gap-3 border-collapse border border-gray-300 w-full">
            {bookings.map((booking) => (
                <tr key={booking.id}>
                    <td>{booking.user.username}</td>
                    <td>{booking.phoneNum}</td>
                    <td>{booking.email}</td>
                    <td>{booking.serviceType}</td>
                    <td>{new Date(booking.date).toLocaleDateString()}</td>
                    <td>

                    <select value={booking.bookingStatus} onChange={(e) => handleStatusChange(booking.id, e.target.value)}> 
                        <option value="pending" className="bg-gray-500">Pending</option>
                        <option value="confirmed" className="bg-green-500">Confirmed</option>
                        <option value="completed" className="bg-blue-500">Completed</option>
                        <option value="halt" className="bg-red-500">Halt</option>
                        
                        </select>
                    </td>
                    <td>{booking.address}</td>
                    <td><MdDeleteForever className="text-red-500 cursor-pointer mr-3.5" onClick={() => handleDeleteBooking(booking.id)} /></td>
                </tr>
            ))}
            
        </tbody>
      </table>
      
    </div>
  );
}
export default BookingTable;