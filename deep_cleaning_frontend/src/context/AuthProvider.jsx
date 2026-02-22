import axios from "axios";
import AuthContext from "./AuthContext.jsx";
import {useState} from "react";
import { useEffect } from "react";


export function AuthProvider({children}){


    const[user,setUser]=useState(null);
    const[profile,setProfile]=useState(null);
    const[provider,setProvider]=useState(null);
    const[role,setRole]=useState(null);
    const [token,setToken]=useState(localStorage.getItem("token"));



    //IMPORANT: This login function is what we will call from our Login component to update the token in the context and trigger the profile fetch
     const login = (newToken) => {
        localStorage.setItem("token", newToken);
        setToken(newToken);   // <- trigger re-render + useEffect
    };


    
    useEffect(()=>{
        if(!token){
            console.log("No token found, skipping profile fetch");
            return;
        }
    axios.get("https://deep-cleaning-demo.vercel.app/user/me",{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then((response)=>{
        console.log("Profile data:", response.data);
        console.log("Role of the user", response.data.role);
        setUser(response.data.username);
        setProfile(response.data.profile_pic);
        setProvider(response.data.auth_provider);
        setRole(response.data.role);
        
    }).catch((error)=>{
        console.error("Error fetching profile:", error);
    })},[token])


   

    return(
        <AuthContext.Provider value={{user,profile,login,provider,role}}>
        {children}
        </AuthContext.Provider>
    )

}