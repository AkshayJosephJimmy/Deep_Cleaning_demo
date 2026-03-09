import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext.jsx";

function AccountHeader() {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full bg-sky-400 shadow-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div className="w-7 h-7 bg-white/25 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
          </div>
          <h1 className="text-white font-bold text-lg tracking-tight">Deep Cleaning</h1>
        </Link>

        <Link to="/signin" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-xl transition-all duration-200">
          <MdAccountCircle size={22} className="text-white" />
          <span className="text-white text-sm font-semibold">{user || "Sign In"}</span>
        </Link>
      </div>
    </div>
  );
}

export default AccountHeader;
