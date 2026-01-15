import Login from "./Login";
import Signin from "./Signin";
import { useState } from "react";




function RegisterCard(){


    const[registerToggle, setRegisterToggle] = useState("login");






    return(
       <div className="w-full flex h-screen bg-sky-300 flex-col justify-center items-center">
            <div className="mx-auto flex flex-row w-80 h-20"> 
                <button onClick={() => setRegisterToggle("login")} className={`${registerToggle==='login'?'bg-sky-400 text-white':'bg-gray-100 text-black'}  p-2  w-full`}>
                    Login
                    </button>
                <button onClick={() => setRegisterToggle("signin")} className={`${registerToggle==='signin'?'bg-sky-400 text-white':'bg-gray-100 text-black'}  p-2  w-full`}>
                    Sign Up
                    </button>
            </div>
            <div>
                {registerToggle==="login"?<Login/>:<Signin/>}
            </div>
            
        </div>
    )
}
export default RegisterCard;