import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function useBookingData() {
    const[bookings,setBookings]=useState([]);

useEffect(() => {

    axios.get('https://deep-cleaning-backend.onrender.com/api/getBookings', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }).then((response) => {
        console.log("Booking data:", response.data);
        console.log("status of the booking",response.data.bookingStatus);
        setBookings(response.data);
    }).catch((error) => {
        console.error("Error fetching booking data:", error);
    });
}, []);
return {bookings,setBookings};
}
export default useBookingData;