import { MdAccountCircle, MdMenu, MdClose, MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext.jsx";

function AccountHeader() {
  const { user } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sky-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-extrabold text-sm">SC</span>
          </div>
          <span className="text-lg font-extrabold text-sky-600 tracking-tight hidden sm:block">
            Sparkle<span className="text-green-500">Clean</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-sky-500 transition-colors">Home</Link>
          <a href="#services" className="hover:text-sky-500 transition-colors">Services</a>
          <a href="#contact" className="hover:text-sky-500 transition-colors">Contact</a>
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200">
            <MdAccountCircle size={22} className="text-sky-500" />
            <Link to="/signin">
              <span className="text-sm font-semibold text-gray-700 hover:text-sky-500 transition-colors cursor-pointer">
                {user || "Sign In"}
              </span>
            </Link>
          </div>
          <Link to="/booking">
            <button className="bg-sky-500 hover:bg-green-500 text-white px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg">
              Book Now
            </button>
          </Link>
        </div>

        {/* Mobile: user + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <Link to="/signin" className="flex items-center gap-1.5 text-sky-500">
            <MdAccountCircle size={24} />
            <span className="text-xs font-semibold text-gray-700">{user || "Sign In"}</span>
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">
            {menuOpen ? <MdClose size={22} /> : <MdMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-2 shadow-lg">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-sky-500 font-medium py-2.5 border-b border-gray-100 text-sm">Home</Link>
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-sky-500 font-medium py-2.5 border-b border-gray-100 text-sm">Services</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-sky-500 font-medium py-2.5 border-b border-gray-100 text-sm">Contact</a>
          <Link to="/booking" onClick={() => setMenuOpen(false)}>
            <button className="bg-sky-500 text-white w-full py-3 rounded-full font-bold mt-2 hover:bg-green-500 transition-all text-sm">
              Book Now
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
export default AccountHeader;
