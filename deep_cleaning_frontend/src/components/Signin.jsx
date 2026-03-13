import GoogleLogin from "./GoogleLogin";
import { useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function Signin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e) {
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
    e.preventDefault();
    axios.post("https://deep-cleaning-backend.onrender.com/auth/signup", {
      username: username,
      email: email,
      password: password,
    }).then((response) => {
      console.log(response.data);
      alert("Sign up successful! Please log in to continue.");
    }).catch((error) => {
      console.error("Sign In error:", error);
      alert("Sign up failed. Please check your details and try again.");
    });
  }

  const inputClass = "w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 transition-all bg-gray-50 hover:bg-white pl-10";

  return (
    <div className="w-full max-w-sm">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          <input type="text" placeholder="Choose a username" onChange={(e) => setUsername(e.target.value)} value={username} className={inputClass} />
        </div>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          <input type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} value={email} className={inputClass} />
        </div>
        <div className="relative">
          <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          <input type="password" placeholder="Create password" onChange={(e) => setPassword(e.target.value)} value={password} className={inputClass} />
        </div>
        <div className="relative">
          <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          <input type="password" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} className={inputClass} />
        </div>
        <button type="submit" className="w-full py-3.5 bg-sky-500 text-white rounded-full font-bold text-sm hover:bg-green-500 transition-all duration-300 shadow-md hover:shadow-lg mt-1">
          Create Account →
        </button>
        <div className="flex items-center gap-3 my-1">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-medium">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <GoogleLogin />
      </form>
    </div>
  );
}
export default Signin;

//90552372382-lrce96g69748g7br4ncosq9qq9ktn6fi.apps.googleusercontent.com
