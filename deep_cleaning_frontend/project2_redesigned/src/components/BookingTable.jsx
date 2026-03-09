import useBookingData from "../hooks/useBookingData";
import { useState } from "react";
import axios from 'axios';
import { MdDeleteForever } from "react-icons/md";

function BookingTable() {
  const [deleteBooking, setDelete] = useState(false);
  const { bookings, setBookings } = useBookingData();
  const [selectedStatus, setSelectedStatus] = useState("pending");

  const handleStatusChange = (bookingId, newStatus) => {
    axios.put(`https://deep-cleaning-backend.onrender.com/patch/updateBookingStatus/${bookingId}`, {
      bookingStatus: newStatus
    }, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((response) => {
      setSelectedStatus(newStatus);
      setBookings(prevBookings => prevBookings.map(booking => {
        if (booking.id === bookingId) return { ...booking, bookingStatus: newStatus };
        return booking;
      }));
    }).catch((error) => {
      alert("Failed to update booking status. Please try again.");
    });
  };

  const handleDeleteBooking = (bookingId) => {
    axios.delete(`https://deep-cleaning-backend.onrender.com/api/deleteBooking/${bookingId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }).then(() => {
      setBookings(prevBookings => prevBookings.filter(booking => booking.id !== bookingId));
    }).catch(() => {
      alert("Failed to delete booking. Please try again.");
    });
  };

  const statusColors = {
    pending:   "bg-amber-100 text-amber-700",
    confirmed: "bg-green-100 text-green-700",
    completed: "bg-sky-100 text-sky-700",
    halt:      "bg-red-100 text-red-700",
  };

  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-slate-50 text-xs uppercase tracking-widest text-slate-500 font-bold">
          <th className="px-5 py-3.5 text-left">Customer</th>
          <th className="px-5 py-3.5 text-left">Mobile</th>
          <th className="px-5 py-3.5 text-left">Email</th>
          <th className="px-5 py-3.5 text-left">Service</th>
          <th className="px-5 py-3.5 text-left">Date</th>
          <th className="px-5 py-3.5 text-left">Status</th>
          <th className="px-5 py-3.5 text-left">Address</th>
          <th className="px-5 py-3.5 text-left"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {bookings.map((booking) => (
          <tr key={booking.id} className="hover:bg-slate-50 transition-colors duration-150">
            <td className="px-5 py-3.5 font-semibold text-slate-800">{booking.user.username}</td>
            <td className="px-5 py-3.5 text-slate-600">{booking.phoneNum}</td>
            <td className="px-5 py-3.5 text-slate-600">{booking.email}</td>
            <td className="px-5 py-3.5 text-slate-600">{booking.serviceType}</td>
            <td className="px-5 py-3.5 text-slate-600">{new Date(booking.date).toLocaleDateString()}</td>
            <td className="px-5 py-3.5">
              <select
                value={booking.bookingStatus}
                onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                className={`text-xs font-bold px-2.5 py-1.5 rounded-xl border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-300 ${statusColors[booking.bookingStatus] || "bg-slate-100 text-slate-600"}`}
              >
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="halt">Halt</option>
              </select>
            </td>
            <td className="px-5 py-3.5 text-slate-600 max-w-32 truncate">{booking.address}</td>
            <td className="px-5 py-3.5">
              <button
                onClick={() => handleDeleteBooking(booking.id)}
                className="text-slate-300 hover:text-red-500 transition-colors duration-200 cursor-pointer"
                title="Delete booking"
              >
                <MdDeleteForever size={22} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default BookingTable;
