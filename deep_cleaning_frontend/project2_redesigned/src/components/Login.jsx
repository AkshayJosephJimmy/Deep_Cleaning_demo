import GoogleLogin from "./GoogleLogin";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext.jsx";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem("token"));

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("https://deep-cleaning-backend.onrender.com/auth/login", {
      username: username,
      email: email,
      password: password
    }).then((response) => {
      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      login(response.data.token);
      navigate('/');
    }).catch((error) => {
      console.error("Login error:", error);
      alert("Login failed. Please check your credentials and try again.");
    });
  }

  const inputClass = "w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent transition-all bg-slate-50 hover:bg-white";

  return (
    <div className="p-6">
      {/* Demo credentials notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 mb-5 text-xs text-amber-700">
        <p className="font-bold mb-1">🔑 Demo Credentials</p>
        <p>Username: <strong>Akshay</strong> &nbsp;|&nbsp; Email: <strong>admin@gmail.com</strong> &nbsp;|&nbsp; Password: <strong>123</strong></p>
      </div>

      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div>
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 block">Username</label>
          <input type="text" placeholder="Your username" value={username} onChange={(e) => setUsername(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 block">Email</label>
          <input type="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 block">Password</label>
          <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className={inputClass} />
        </div>
        <button type="submit" className="w-full py-2.5 bg-sky-400 hover:bg-green-500 text-white font-bold rounded-xl transition-all duration-300 text-sm mt-1 shadow-md hover:shadow-lg">
          Login
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
export default Login;
