import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext.jsx";



function AccountHeader() {
  
  const {user}= useContext(AuthContext);
  console.log("User in AccountHeader:", user);
  return (
    <div  className="w-full h-30 bg-linear-to-r from-gray-100 to-blue-200 shadow-lg  flex justify-center items-center">
      <h1 className="text-2xl font-bold text-gray-800">Home</h1>
      <h1 className="text-2xl font-bold text-gray-800 ml-4">Services</h1>
      <h1 className="text-2xl font-bold text-gray-800 ml-4">Booking</h1>
      <div className=" flex flex-col items-center ml-auto p-3">

      <Link to={"/signin"}><MdAccountCircle size={30} className="ml-4 text-gray-600"/></Link>
      
      <span className="ml-4 text-sm text-gray-600 ">{user}</span>
      </div>
    </div>
  );
}
export default AccountHeader;







