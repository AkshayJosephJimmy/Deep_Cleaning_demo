import Services from "./Services";
import ServiceCards from "./ServiceCards";
import axios from "axios";
import { useState } from "react";




function BookingPage(){
    const [name,setName]=useState('');
    const [serviceType,setServiceType]=useState('');
    const [address,setAddress]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const [email,setEmail]=useState('');
    const [date,setDate]=useState('');

    const token = localStorage.getItem("token");

    const handlebooking=(e)=>{
       e.preventDefault();
        axios.post('http://localhost:5001/api/bookings', {
            serviceType:serviceType,
            username:name,
            address:address,
            phoneNum:phoneNumber,
            email:email,
            date:new Date(date)
        },{

            headers:{
                Authorization:`Bearer ${token}`,
                
            }
        }).then((response)=>{
            console.log(response.data);
            alert("Booking successful!");
        }).catch((error)=>{
            console.error("There was an error!",error);
            
        });
}
    return(
        <div >
            <h1 className="text-4xl font-bold mb-4">Book a cleaning</h1>
            <p>Book our cleaning services online today!</p>
            <p>We will be in touch with you shortly.</p>
            
        
            <form className="flex flex-col gap-4 w-fit mx-auto" onSubmit={handlebooking}>
                <label>Service type:</label>
                <select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
                    <option value="Standard Cleaning">Standard Cleaning</option>
                    <option value="Deep Cleaning">Deep Cleaning</option>
                    <option value="Home Cleaning">Home Cleaning</option>
                    <option value="Office Cleaning">Office Cleaning</option>
                    <option value="Move-in/Move-out Cleaning">Move-in/Move-out Cleaning</option>
                </select>
                <label for="name">Name:</label>
                <input type="text" id="name" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
                <label for="address">Address:</label>
                
                <input type="text" id="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                <label for="phone">Phone Number:</label>
                <input type="text" id="phone" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <label for="email">Email (optional):</label>
                <input type='email' id="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label for="date">Preferred Date:</label>
                <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <button type="submit" className="w-full p-2 bg-sky-400 text-white mt-3 rounded hover:bg-green-500 transition-all duration-300" value="Book Now"
                >Book Now</button>
            </form>

        </div>
    )
}
export default BookingPage;








