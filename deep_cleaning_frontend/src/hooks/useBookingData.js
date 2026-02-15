import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function useBookingData() {
    const[bookings,setBookings]=useState([]);

useEffect(() => {

    axios.get('http://localhost:5001/api/getBookings', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }).then((response) => {
        console.log("Booking data:", response.data);
        setBookings(response.data);
    }).catch((error) => {
        console.error("Error fetching booking data:", error);
    });
}, []);
return bookings;
}
export default useBookingData;