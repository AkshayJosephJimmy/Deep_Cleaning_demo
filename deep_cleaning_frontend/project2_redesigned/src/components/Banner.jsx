import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="bg-gradient-to-r from-sky-500 to-sky-600 px-6 py-14 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-white/5 rounded-full"></div>
      <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-white/5 rounded-full"></div>
      <div className="absolute top-4 right-24 w-16 h-16 bg-green-400/20 rounded-full"></div>

      <div className="relative max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
        <span className="text-sky-100 text-xs font-bold uppercase tracking-widest">Get Started</span>
        <h2
          className="text-2xl md:text-3xl font-extrabold text-white leading-tight"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Ready for a spotless space?
        </h2>
        <p className="text-sky-100 text-sm font-medium">Book your cleaning service today and experience the difference.</p>
        <Link to="/booking">
          <button className="px-8 py-3 bg-white text-sky-600 font-bold text-sm rounded-xl shadow-lg hover:bg-green-400 hover:text-white transition-all duration-300 flex items-center gap-2">
            Book Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}
export default Banner;
