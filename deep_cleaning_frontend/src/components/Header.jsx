import { MdAccountCircle, MdMenu, MdClose } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const svgLogo = "/cleaning service-bro.svg";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* ── Navigation Bar ── */}
      <nav className="w-full bg-white/95 backdrop-blur-sm shadow-sm px-4 md:px-10 py-3 flex justify-between items-center sticky top-0 z-50 border-b border-gray-100">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={svgLogo} alt="logo" className="w-9 h-9" />
          <span className="text-xl font-extrabold text-sky-600 tracking-tight">
            Sparkle<span className="text-green-500">Clean</span>
          </span>
        </div>

        {/* Desktop Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {[["#services", "Services"], ["#how-it-works", "How It Works"], ["#testimonials", "Reviews"], ["#contact", "Contact"]].map(([href, label]) => (
            <a key={href} href={href} className="text-gray-600 hover:text-sky-500 font-medium text-sm transition-colors duration-200">
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/signin">
            <button className="flex items-center gap-1.5 text-gray-600 hover:text-sky-500 font-medium text-sm transition-colors">
              <MdAccountCircle size={20} /> Sign In
            </button>
          </Link>
          <Link to="/booking">
            <button className="bg-sky-500 hover:bg-green-500 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg">
              Book Now
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 p-1 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <MdClose size={26} /> : <MdMenu size={26} />}
        </button>
      </nav>

      {/* ── Mobile Menu Dropdown ── */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl px-6 py-4 flex flex-col gap-1 z-40 border-b border-gray-100">
          {[["#services", "Services"], ["#how-it-works", "How It Works"], ["#testimonials", "Reviews"], ["#contact", "Contact"]].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-sky-500 font-medium py-3 border-b border-gray-100 text-sm"
            >
              {label}
            </a>
          ))}
          <Link to="/signin" onClick={() => setMenuOpen(false)}>
            <button className="flex items-center gap-2 text-gray-700 font-medium py-3 text-sm w-full">
              <MdAccountCircle size={20} /> Sign In
            </button>
          </Link>
          <Link to="/booking" onClick={() => setMenuOpen(false)}>
            <button className="bg-sky-500 text-white w-full py-3 rounded-full font-bold mt-2 hover:bg-green-500 transition-all text-sm">
              Book Now
            </button>
          </Link>
        </div>
      )}

      {/* ── Hero Section ── */}
      <div className="bg-gradient-to-br from-sky-50 via-white to-green-50 px-6 md:px-16 lg:px-24 py-14 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text */}
        <div className="flex-1 text-center md:text-left max-w-xl">
          <span className="inline-block bg-sky-100 text-sky-600 text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase">
            #1 Cleaning Service in Kottayam
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-5">
            Your Space,{" "}
            <span className="text-sky-500 relative">
              Spotless
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-sky-200" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,6 Q50,0 100,6 Q150,12 200,6" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span>{" "}
            & Fresh
          </h1>
          <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed">
            Professional deep cleaning services tailored to your home, office, and more.
            Trusted by <strong className="text-gray-700">500+ happy customers</strong> across Kottayam.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/booking">
              <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                Book a Cleaning →
              </button>
            </Link>
            <a href="#services">
              <button className="border-2 border-sky-400 text-sky-500 hover:bg-sky-50 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 w-full sm:w-auto">
                View Services
              </button>
            </a>
          </div>

          {/* Social proof strip */}
          <div className="flex items-center gap-4 mt-8 justify-center md:justify-start">
            <div className="flex -space-x-2">
              {["AJ", "MK", "SR", "PT"].map((initials, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white bg-sky-500 flex items-center justify-center text-white text-xs font-bold shadow-sm"
                  style={{ backgroundColor: ["#0ea5e9", "#22c55e", "#6366f1", "#f59e0b"][i] }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-500">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-amber-400" size={12} />)}
                <span className="font-bold text-gray-700 ml-1">4.9</span>
              </div>
              <span>from 500+ reviews</span>
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex-shrink-0 relative">
          <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-sky-100 rounded-full flex items-center justify-center shadow-2xl">
            <img
              src={svgLogo}
              alt="Cleaning illustration"
              className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 drop-shadow-lg"
            />
          </div>
          {/* Floating badges */}
          <div className="absolute -top-2 -right-2 sm:top-4 sm:right-0 bg-white rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2 border border-gray-100 text-xs font-semibold text-gray-700">
            <span className="text-green-500 text-lg">✓</span> Eco-Friendly
          </div>
          <div className="absolute bottom-4 -left-2 sm:-left-6 bg-white rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2 border border-gray-100 text-xs font-semibold text-gray-700">
            <FaStar className="text-amber-400" /> 100% Satisfaction
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
