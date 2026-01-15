import Services from "./Services";
import ServiceCards from "./ServiceCards";




function BookingPage(){



    return(
        <div >
            <h1 className="text-4xl font-bold mb-4">Book a cleaning</h1>
            <p>Book our cleaning services online today!</p>
            <p>We will be in touch with you shortly.</p>
            
        
            <form className="flex flex-col gap-4 w-fit mx-auto">
                <label>Service type:</label>
                <select>
                    <option>Standard Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Home Cleaning</option>
                    <option>Office Cleaning</option>
                    <option>Move-in/Move-out Cleaning</option>
                </select>
                <label for="address">Address:</label>
                
                <input type="text" id="address" placeholder="Address" />
                <label for="phone">Phone Number:</label>
                <input type="text" id="phone" placeholder="Phone Number" />
                <label for="email">Email (optional):</label>
                <input type='email' id="email" placeholder="email" />
                <label for="date">Preferred Date:</label>
                <input type="date" id="date" />
                <submit className="w-full p-2 bg-sky-400 text-white mt-3 rounded hover:bg-green-500 transition-all duration-300" value="Book Now">Book Now</submit>
            </form>

        </div>
    )
}
export default BookingPage;








