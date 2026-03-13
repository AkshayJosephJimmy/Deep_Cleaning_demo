import Login from "./Login";
import Signin from "./Signin";
import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterCard() {
  const [registerToggle, setRegisterToggle] = useState("login");

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-sky-100 via-white to-green-50 px-4 py-10">
      <div className="w-full max-w-sm">
        {/* Logo header */}
        <div className="text-center mb-8">
          <Link to="/">
            <span className="text-2xl font-extrabold text-sky-600 tracking-tight">
              Sparkle<span className="text-green-500">Clean</span>
            </span>
          </Link>
          <p className="text-gray-500 text-sm mt-1">
            {registerToggle === "login" ? "Welcome back! Sign in to continue." : "Create your account to get started."}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Toggle tabs */}
          <div className="flex border-b border-gray-100">
            <button
              onClick={() => setRegisterToggle("login")}
              className={`flex-1 py-4 text-sm font-bold transition-all duration-200 ${registerToggle === "login" ? "bg-sky-500 text-white" : "text-gray-500 hover:text-sky-500 hover:bg-gray-50"}`}
            >
              Sign In
            </button>
            <button
              onClick={() => setRegisterToggle("signin")}
              className={`flex-1 py-4 text-sm font-bold transition-all duration-200 ${registerToggle === "signin" ? "bg-sky-500 text-white" : "text-gray-500 hover:text-sky-500 hover:bg-gray-50"}`}
            >
              Create Account
            </button>
          </div>

          {/* Form */}
          <div className="p-7">
            {registerToggle === "login" ? <Login /> : <Signin />}
          </div>
        </div>

        <p className="text-center text-gray-400 text-xs mt-6">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
export default RegisterCard;
