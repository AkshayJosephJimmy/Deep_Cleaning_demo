import GoogleLogin from "./GoogleLogin";
import { useState } from "react";
import axios from "axios";

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
      alert("Sign In successful! Please log in to continue.");
    }).catch((error) => {
      console.error("Sign In error:", error);
      alert("Sign In failed. Please check your details and try again.");
    });
  }

  const inputClass = "w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent transition-all bg-slate-50 hover:bg-white";

  return (
    <div className="p-6">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div>
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 block">Username</label>
          <input type="text" placeholder="Choose a username" onChange={(e) => setUsername(e.target.value)} value={username} className={inputClass} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 block">Email</label>
          <input type="email" placeholder="you@email.com" onChange={(e) => setEmail(e.target.value)} value={email} className={inputClass} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 block">Password</label>
          <input type="password" placeholder="••••••••" onChange={(e) => setPassword(e.target.value)} value={password} className={inputClass} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 block">Confirm Password</label>
          <input type="password" placeholder="••••••••" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} className={inputClass} />
        </div>
        <button type="submit" className="w-full py-2.5 bg-sky-400 hover:bg-green-500 text-white font-bold rounded-xl transition-all duration-300 text-sm mt-1 shadow-md hover:shadow-lg">
          Create Account
        </button>

        <div className="relative my-1">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
          <div className="relative flex justify-center"><span className="bg-white px-3 text-xs text-slate-400 font-medium">or continue with</span></div>
        </div>

        <GoogleLogin />
      </form>
    </div>
  );
}
export default Signin;
