import { Link } from "react-router-dom";
import { FaArrowRight, FaPhone } from "react-icons/fa";

function Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-sky-600 via-sky-500 to-green-500 py-14 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-3">Limited Slots Available This Week</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Ready for a Spotless Space?
        </h2>
        <p className="text-sky-100 text-sm md:text-base mb-8 max-w-xl mx-auto">
          Book today and enjoy professional cleaning with a 100% satisfaction guarantee. First-time customers get priority scheduling!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/booking">
            <button className="flex items-center gap-2 bg-white text-sky-600 hover:bg-gray-50 px-8 py-4 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
              Book Now — It's Easy <FaArrowRight size={14} />
            </button>
          </Link>
          <a href="tel:+919876543210">
            <button className="flex items-center gap-2 border-2 border-white/70 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 w-full sm:w-auto">
              <FaPhone size={14} /> Call Us Now
            </button>
          </a>
        </div>

        <p className="text-sky-200 text-xs mt-6">✓ No hidden charges &nbsp;&nbsp; ✓ Same-day availability &nbsp;&nbsp; ✓ Fully insured team</p>
      </div>
    </div>
  );
}
export default Banner;
