import Services from "./Services";
import axios from "axios";
import { useState } from "react";

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
      headers: { Authorization: `Bearer ${token}` }
    }).then((response) => {
      console.log(response.data);
      alert("Booking successful!");
    }).catch((error) => {
      if (error.response && error.response.status === 401) {
        alert("Please sign in to book a service.");
      }
    });
  };

  const inputClass = "w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent transition-all bg-slate-50 hover:bg-white";
  const labelClass = "text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 block";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10 items-start">

        {/* Services panel */}
        <div className="flex-1 min-w-0">
          <Services />
        </div>

        {/* Booking form */}
        <div className="w-full lg:w-96 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden sticky top-6">
          {/* Card header */}
          <div className="bg-gradient-to-r from-sky-400 to-sky-500 px-6 py-5">
            <h1
              className="text-xl font-extrabold text-white"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Book a Service
            </h1>
            <p className="text-sky-100 text-xs mt-1">Fill in your details to schedule a cleaning</p>
          </div>

          <form className="p-6 flex flex-col gap-4" onSubmit={handlebooking}>

            <div>
              <label className={labelClass}>Service Type</label>
              <select
                className={inputClass}
                defaultValue=""
                required
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
              >
                <option value="" disabled>Select a service...</option>
                <option value="Standard Cleaning">Standard Cleaning</option>
                <option value="Deep Cleaning">Deep Cleaning</option>
                <option value="Home Cleaning">Home Cleaning</option>
                <option value="Office Cleaning">Office Cleaning</option>
                <option value="Move-in/Move-out Cleaning">Move-in/Move-out Cleaning</option>
              </select>
            </div>

            <div>
              <label className={labelClass} htmlFor="name">Full Name</label>
              <input className={inputClass} type="text" required id="name" placeholder="Your name" onChange={(e) => setName(e.target.value)} value={name} />
            </div>

            <div>
              <label className={labelClass} htmlFor="address">Address</label>
              <input className={inputClass} type="text" id="address" required placeholder="Your address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>

            <div>
              <label className={labelClass} htmlFor="phone">Phone Number</label>
              <input className={inputClass} type="text" id="phone" required placeholder="+91 ..." value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>

            <div>
              <label className={labelClass} htmlFor="email">Email</label>
              <input className={inputClass} type="email" id="email" required placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
              <label className={labelClass} htmlFor="date">Preferred Date</label>
              <input className={inputClass} type="date" id="date" required value={date} onChange={(e) => setDate(e.target.value)} />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-sky-400 hover:bg-green-500 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm mt-1 flex items-center justify-center gap-2"
            >
              Confirm Booking
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
export default BookingPage;
