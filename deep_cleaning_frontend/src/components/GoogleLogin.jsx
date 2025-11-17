
import { useEffect } from "react";
import React from "react";


function GoogleLogin() {

const handleCallback=(response)=>{
console.log(response.credential);






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







































