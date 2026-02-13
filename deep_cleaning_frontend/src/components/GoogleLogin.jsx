
import { useEffect } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext.jsx";



function GoogleLogin() {
  const {login}=useContext(AuthContext);
  const navigate=useNavigate();

const handleCallback=(response)=>{

  console.log(response.credential);
axios.post("http://localhost:5001/auth/google",{
    credential:response.credential},
  {headers: { "Content-Type": "application/json" }})
.then((res)=>{
  console.log('this is the response');
    console.log(res.data)
    
    console.log(localStorage.getItem("token"));
    
    login(res.data.token);
    navigate('/booking');  
  })
    
.catch((err)=>{
  
    console.log(err.response?.status);
  console.log(err.response?.data);});  


}





useEffect(()=>{

    google.accounts.id.initialize({
        client_id:"90552372382-lrce96g69748g7br4ncosq9qq9ktn6fi.apps.googleusercontent.com",
        callback: handleCallback
    })
    google.accounts.id.renderButton(
        document.getElementById("googleBtn"),
        {theme:"outline", size:"large"}
    );
},[])




  return (
    <div className="mt-4">
      <div id="googleBtn">google</div>
    </div>
  );
}
export default GoogleLogin;







































