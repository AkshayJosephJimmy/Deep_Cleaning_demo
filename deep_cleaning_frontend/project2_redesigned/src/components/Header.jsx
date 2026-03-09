import { Link } from "react-router-dom";

function Header() {
  const svgLogo = "/cleaning service-bro.svg";

  return (
    <div className="w-full bg-gradient-to-r from-gray-50 to-green-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Text content */}
        <div className="flex flex-col gap-4 md:ml-6 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1.5 rounded-full w-fit tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block"></span>
            Kottayam's #1 Service
          </div>

          <h1
            className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Best Deep Cleaning{" "}
            <span className="text-sky-500">in Kottayam</span>
          </h1>

          <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
            Why go elsewhere when we have the best professionals in the deep cleaning space
          </p>

          <Link to="/booking">
            <button className="w-fit px-6 py-3 bg-sky-400 hover:bg-green-500 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
              Book Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </div>

        {/* Illustration */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-200/40 to-green-200/40 rounded-full blur-3xl scale-110"></div>
          <img
            src={svgLogo}
            alt="Cleaning Service"
            className="relative w-44 h-44 md:w-80 md:h-80 object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Bottom wave */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#f8fafc"/>
        </svg>
      </div>
    </div>
  );
}

export default Header;
