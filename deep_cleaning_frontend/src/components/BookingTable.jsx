
import useBookingData from "../hooks/useBookingData";
import { useState } from "react";

function BookingTable() {
  const bookings=useBookingData();
  console.log("Bookings in Dashboard:", bookings);
  console.log("Status",bookings.bookingStatus);
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
                    <td>{booking.bookingStatus  }</td>
                    <td>{booking.address}</td>
                </tr>
            ))}
            
        </tbody>
      </table>
      
    </div>
  );
}
export default BookingTable;