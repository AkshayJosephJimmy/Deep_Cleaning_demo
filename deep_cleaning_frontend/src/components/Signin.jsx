import GoogleLogin from "./GoogleLogin";
import { useState } from "react";
import axios from "axios";






function Signin() {
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e){
    if(password !== confirmPassword){
      alert("Passwords do not match. Please try again.");
      return;
    }
    e.preventDefault();
    axios.post("https://deep-cleaning-backend.onrender.com/auth/signup", {
      username: username,
      email: email,
      password: password,
      
    }).then((response)=>{
      console.log(response.data);
      alert("Sign In successful! Please log in to continue.");
    }).catch((error)=>{
      console.error("Sign In error:", error);
      alert("Sign In failed. Please check your details and try again.");
    });

  }


  return (
   
      <div className=" w-80 h-120  m-auto bg-gray-200 ">
        <form className="flex flex-col justify-center items-center p-5"onSubmit={handleSubmit} >
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} value={username} className="w-64 p-2 mb-4 border border-gray-300 rounded"/>
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={email} className="w-64 p-2 mb-4 border border-gray-300 rounded"/>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password} className="w-64 p-2 mb-4 border border-gray-300 rounded"/>
            <input type="password" placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} className="w-64 p-2 mb-4 border border-gray-300 rounded"/>
            <button type="submit" className="w-64 p-2 bg-sky-400 text-white mt-3 rounded hover:bg-green-500 transition-all duration-300">Sign In</button>
        <GoogleLogin/>

        </form>

       

      </div>
   
  );
}

export default Signin;

//90552372382-lrce96g69748g7br4ncosq9qq9ktn6fi.apps.googleusercontent.com






