import axios from "axios";
import AuthContext from "./AuthContext.jsx";
import {useState} from "react";
import { useEffect } from "react";


export function AuthProvider({children}){


    const[user,setUser]=useState(null);
    const[profile,setProfile]=useState(null);
    const [token,setToken]=useState(localStorage.getItem("token"));
     const login = (newToken) => {
        localStorage.setItem("token", newToken);
        setToken(newToken);   // <- trigger re-render + useEffect
    };
    
    useEffect(()=>{
        if(!token){
            console.log("No token found, skipping profile fetch");
            return;
        }
    axios.get("http://localhost:5001/user/me",{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then((response)=>{
        console.log("Profile data:", response.data);
        setUser(response.data.username);
        setProfile(response.data.profile_pic);
        
    }).catch((error)=>{
        console.error("Error fetching profile:", error);
    })},[token])


   

    return(
        <AuthContext.Provider value={{user,profile,login}}>
            {children}
        </AuthContext.Provider>
    )

}