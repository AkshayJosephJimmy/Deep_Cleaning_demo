import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";



function AccountHeader() {
  return (
    <div className="w-full h-30 bg-sky-400 shadow-md flex justify-center items-center">
      <h1 className="text-2xl font-bold text-gray-800"></h1>
      <MdAccountCircle size={30} className="ml-4 text-gray-600"/>
      <Link to={"/signin"} >sign in</Link>
    </div>
  );
}
export default AccountHeader;







