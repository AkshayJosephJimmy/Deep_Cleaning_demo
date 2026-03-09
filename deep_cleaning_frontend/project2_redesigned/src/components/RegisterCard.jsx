import Login from "./Login";
import Signin from "./Signin";
import { useState } from "react";

function RegisterCard() {
  const [registerToggle, setRegisterToggle] = useState("login");

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-sky-300 to-green-300 flex items-center justify-center px-4 py-10">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/15 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="relative w-full max-w-sm">
        {/* Logo / Brand */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-extrabold text-white" style={{ fontFamily: "'Fraunces', serif" }}>
            Deep Cleaning
          </h1>
          <p className="text-sky-100 text-sm mt-1">Kottayam's #1 Cleaning Service</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Top color strip */}
          <div className="h-1.5 bg-gradient-to-r from-sky-400 to-green-400" />

          {/* Tab switcher */}
          <div className="flex border-b border-slate-100">
            <button
              onClick={() => setRegisterToggle("login")}
              className={`flex-1 py-3.5 text-sm font-bold transition-all duration-200 ${registerToggle === 'login' ? 'text-sky-500 border-b-2 border-sky-400 bg-sky-50/50' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Login
            </button>
            <button
              onClick={() => setRegisterToggle("signin")}
              className={`flex-1 py-3.5 text-sm font-bold transition-all duration-200 ${registerToggle === 'signin' ? 'text-sky-500 border-b-2 border-sky-400 bg-sky-50/50' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          {registerToggle === "login" ? <Login /> : <Signin />}
        </div>
      </div>
    </div>
  );
}
export default RegisterCard;
