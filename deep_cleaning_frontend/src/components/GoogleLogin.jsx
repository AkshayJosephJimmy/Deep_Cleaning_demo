
import { useEffect } from "react";
import React from "react";
import axios from "axios";


function GoogleLogin() {

const handleCallback=(response)=>{

axios.post("http://localhost:5001/auth/google",{
    credential:response.credential},
  {headers: { "Content-Type": "application/json" }})
.then((res)=>{
  console.log('this is the response');
    console.log(res.data)})
.catch((err)=>{
  console.log('this is the error');
    console.log(err)});  


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
    <div>
      <div id="googleBtn">google</div>
    </div>
  );
}
export default GoogleLogin;







































