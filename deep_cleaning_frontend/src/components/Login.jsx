import GoogleLogin from "./GoogleLogin";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext.jsx";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

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
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      console.log(token);
      login(response.data.token);
      navigate('/');
    }).catch((error) => {
      console.error("Login error:", error);
      alert("Login failed. Please check your credentials and try again.");
    });
  }

  const inputClass = "w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 transition-all bg-gray-50 hover:bg-white pl-10";

  return (
    <div className="w-full max-w-sm">
      {/* Demo credentials card */}
      <div className="mb-5 bg-amber-50 border border-amber-200 rounded-2xl p-4">
        <p className="text-amber-700 text-xs font-bold mb-2 uppercase tracking-wide">Demo Credentials</p>
        <div className="text-amber-600 text-xs space-y-1">
          <p><span className="font-semibold">Username:</span> Akshay</p>
          <p><span className="font-semibold">Email:</span> admin@gmail.com</p>
          <p><span className="font-semibold">Password:</span> 123</p>
        </div>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className={inputClass} />
        </div>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
        </div>
        <div className="relative">
          <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={inputClass} />
        </div>
        <button type="submit" className="w-full py-3.5 bg-sky-500 text-white rounded-full font-bold text-sm hover:bg-green-500 transition-all duration-300 shadow-md hover:shadow-lg mt-1">
          Sign In →
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
export default Login;
