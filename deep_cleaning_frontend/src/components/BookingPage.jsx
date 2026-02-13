import Services from "./Services";
import ServiceCards from "./ServiceCards";
import axios from "axios";
import { useState } from "react";
import BookingHero from "./BookingHero";




function BookingPage(){
    const [name,setName]=useState('');
    const [serviceType,setServiceType]=useState('');
    const [address,setAddress]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const [email,setEmail]=useState('');
    const [date,setDate]=useState('');

    const token = localStorage.getItem("token");
    const image1="cleaningService.svg";

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
            if(error.response && error.response.status===401){
            
            alert("Please sign in to book a service.");
        }});
}
    return(
        <div className="bg-linear-to-r from-gray-100 to-green-200 flex flex-row justify-between h-full">
            <div>
                <div>

                <img src={image1} alt="Cleaning Service" className="w-50 h-50 object-cover"/>
                </div>
                <p className="text-center text-lg font-semibold">Book a cleaning service today!</p>
            </div>
            
            
             <div className="p-10  rounded-4xl bg-white shadow-md w-fit">

            <form className="flex flex-col gap-2 w-fit mx-auto" onSubmit={handlebooking}>
                <label>Service type:</label>
                <select className="border rounded-lg p-1" value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
                    <option value="Standard Cleaning">Standard Cleaning</option>
                    <option value="Deep Cleaning">Deep Cleaning</option>
                    <option value="Home Cleaning">Home Cleaning</option>
                    <option value="Office Cleaning">Office Cleaning</option>
                    <option value="Move-in/Move-out Cleaning">Move-in/Move-out Cleaning</option>
                </select>
                <label className="text-lg"for="name">Name:</label>
                <input className="border rounded-lg p-1"type="text" id="name" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
                <label className="text-lg"for="address">Address:</label>
                
                <input className="border rounded-lg p-1"type="text" id="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                <label className="text-lg"for="phone">Phone Number:</label>
                <input className="border rounded-lg p-1"type="text" id="phone" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <label className="text-lg"for="email">Email (optional):</label>
                <input className="border rounded-lg p-1"type='email' id="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className="text-lg"for="date">Preferred Date:</label>
                <input className="border rounded-lg p-1"type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <button type="submit" className="w-full p-2 bg-sky-400 text-white mt-3 rounded hover:bg-green-500 transition-all duration-300" value="Book Now"
                >Book Now</button>
            </form>
                </div>

        </div>
    )
}
export default BookingPage;








