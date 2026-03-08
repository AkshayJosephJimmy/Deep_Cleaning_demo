import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext.jsx";



function AccountHeader() {
  
  const {user}= useContext(AuthContext);
  console.log("User in AccountHeader:", user);
  return (
    <div  className="w-full h-30 bg-sky-400 shadow-lg  flex justify-center items-center">
      <Link to={"/"}><h1 className="text-2xl font-bold p-3 text-gray-800">Deep Cleaning</h1></Link>
      
      <div className=" flex flex-col items-center ml-auto p-3">

      <Link to={"/signin"}><MdAccountCircle size={30} className="ml-4 text-gray-600"/></Link>
      
      <span className="ml-4 text-sm font-bold text-gray-800 ">{user || "Sign In"}</span>
      </div>
    </div>
  );
}
export default AccountHeader;







