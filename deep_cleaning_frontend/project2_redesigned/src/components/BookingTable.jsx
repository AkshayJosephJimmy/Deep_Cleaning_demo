import useBookingData from "../hooks/useBookingData";

import axios from 'axios';
import { MdDeleteForever } from "react-icons/md";

const statusColors = {
  pending: "bg-amber-100 text-amber-700",
  confirmed: "bg-green-100 text-green-700",
  completed: "bg-blue-100 text-blue-700",
  halt: "bg-red-100 text-red-700"
};

function BookingTable() {

  const { bookings, setBookings } = useBookingData();


  console.log("Bookings in Dashboard:", bookings);
  console.log("Status", bookings.bookingStatus);

  const handleStatusChange = (bookingId, newStatus) => {
    console.log(`Changing status of booking ${bookingId} to ${newStatus}`);
    console.log("Token being sent:", localStorage.getItem("token"));
    axios.put(`https://deep-cleaning-backend.onrender.com/patch/updateBookingStatus/${bookingId}`, {
      bookingStatus: newStatus
    }, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((response) => {
      console.log("Status updated successfully:", response.data);

      setBookings(prevBookings => prevBookings.map(booking => {
        if (booking.id === bookingId) {
          return { ...booking, bookingStatus: newStatus };
        }
        return booking;
      }));
    }).catch((error) => {
      console.error("Error updating status:", error);
      alert("Failed to update booking status. Please try again.");
    });
  };

  const handleDeleteBooking = (bookingId) => {
    axios.delete(`https://deep-cleaning-backend.onrender.com/api/deleteBooking/${bookingId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((response) => {
      console.log("Booking deleted successfully:", response.data);
      setBookings(prevBookings => prevBookings.filter(booking => booking.id !== bookingId));
    }).catch((error) => {
      console.error("Error deleting booking:", error);
      alert("Failed to delete booking. Please try again.");
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            {["Customer", "Mobile", "Email", "Service", "Date", "Status", "Address", ""].map((h, i) => (
              <th key={i} className="px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {bookings.map((booking) => (
            <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-5 py-4 font-semibold text-gray-800 whitespace-nowrap">{booking.user.username}</td>
              <td className="px-5 py-4 text-gray-600 whitespace-nowrap">{booking.phoneNum}</td>
              <td className="px-5 py-4 text-gray-600 whitespace-nowrap">{booking.email}</td>
              <td className="px-5 py-4 whitespace-nowrap">
                <span className="bg-sky-100 text-sky-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {booking.serviceType}
                </span>
              </td>
              <td className="px-5 py-4 text-gray-600 whitespace-nowrap">
                {new Date(booking.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
              </td>
              <td className="px-5 py-4 whitespace-nowrap">
                <select
                  value={booking.bookingStatus}
                  onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border-0 outline-none cursor-pointer ${statusColors[booking.bookingStatus] || "bg-gray-100 text-gray-600"}`}
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                  <option value="halt">Halt</option>
                </select>
              </td>
              <td className="px-5 py-4 text-gray-600 max-w-[180px] truncate">{booking.address}</td>
              <td className="px-5 py-4">
                <button
                  onClick={() => handleDeleteBooking(booking.id)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-300 hover:bg-red-50 hover:text-red-500 transition-all duration-200"
                  title="Delete booking"
                >
                  <MdDeleteForever size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {bookings.length === 0 && (
        <div className="py-16 text-center text-gray-400">
          <p className="text-4xl mb-3">📋</p>
          <p className="font-semibold text-gray-500">No bookings yet</p>
          <p className="text-sm mt-1">New bookings will appear here</p>
        </div>
      )}
    </div>
  );
}
export default BookingTable;
