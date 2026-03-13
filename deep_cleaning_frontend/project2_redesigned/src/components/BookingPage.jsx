import Services from "./Services";
import axios from "axios";
import { useState } from "react";
import { FaCalendarAlt, FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope, FaBroom } from "react-icons/fa";

function BookingPage() {
  const [name, setName] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  

  const token = localStorage.getItem("token");

  const handlebooking = (e) => {
    e.preventDefault();
    axios.post('https://deep-cleaning-backend.onrender.com/api/bookings', {
      serviceType: serviceType,
      username: name,
      address: address,
      phoneNum: phoneNumber,
      email: email,
      date: new Date(date)
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((response) => {
      console.log(response.data);
      
      alert("Booking successful!");
    }).catch((error) => {
      if (error.response && error.response.status === 401) {
        alert("Please sign in to book a service.");
      }
    });
  };

  const inputClass = "w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 transition-all bg-gray-50 hover:bg-white";
  const labelClass = "text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero strip */}
      <div className="bg-gradient-to-r from-sky-500 to-green-400 py-10 px-4 text-center text-white">
        <FaBroom className="mx-auto mb-3 text-white/70" size={32} />
        <h1 className="text-2xl md:text-3xl font-extrabold">Book a Cleaning Service</h1>
        <p className="text-sky-100 text-sm mt-2">Fill in your details below and we'll confirm your booking shortly</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10 items-start">
        {/* Services panel */}
        <div className="w-full lg:flex-1 min-w-0">
          <Services />
        </div>

        {/* Booking form */}
        <div className="w-full lg:w-auto lg:min-w-[380px] xl:min-w-[420px]">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 sticky top-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-sky-100 rounded-2xl flex items-center justify-center">
                <FaCalendarAlt className="text-sky-500" size={18} />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900">Book Here</h2>
                <p className="text-gray-400 text-xs">Takes less than 2 minutes</p>
              </div>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handlebooking}>
              {/* Service Type */}
              <div className="flex flex-col">
                <label className={labelClass} htmlFor="service">
                  <FaBroom className="text-sky-400" size={14} /> Service Type
                </label>
                <select
                  id="service"
                  className={inputClass}
                  defaultValue=""
                  required
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Standard Cleaning">Standard Cleaning</option>
                  <option value="Deep Cleaning">Deep Cleaning</option>
                  <option value="Home Cleaning">Home Cleaning</option>
                  <option value="Office Cleaning">Office Cleaning</option>
                  <option value="Move-in/Move-out Cleaning">Move-in/Move-out Cleaning</option>
                </select>
              </div>

              {/* Name */}
              <div className="flex flex-col">
                <label className={labelClass} htmlFor="name">
                  <FaUser className="text-sky-400" size={14} /> Full Name
                </label>
                <input
                  className={inputClass}
                  type="text"
                  required
                  id="name"
                  placeholder="Your full name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>

              {/* Address */}
              <div className="flex flex-col">
                <label className={labelClass} htmlFor="address">
                  <FaMapMarkerAlt className="text-sky-400" size={14} /> Address
                </label>
                <input
                  className={inputClass}
                  type="text"
                  id="address"
                  required
                  placeholder="Your full address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className={labelClass} htmlFor="phone">
                  <FaPhone className="text-sky-400" size={14} /> Phone Number
                </label>
                <input
                  className={inputClass}
                  type="text"
                  id="phone"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className={labelClass} htmlFor="email">
                  <FaEnvelope className="text-sky-400" size={14} /> Email Address
                </label>
                <input
                  className={inputClass}
                  type="email"
                  id="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Date */}
              <div className="flex flex-col">
                <label className={labelClass} htmlFor="date">
                  <FaCalendarAlt className="text-sky-400" size={14} /> Preferred Date
                </label>
                <input
                  className={inputClass}
                  type="date"
                  id="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-sky-500 hover:bg-green-500 text-white rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 mt-2"
              >
                Confirm Booking →
              </button>
            </form>

            <p className="text-center text-gray-400 text-xs mt-4">
              ✓ No payment needed now &nbsp; ✓ Free cancellation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookingPage;
