import GoogleLogin from "./GoogleLogin";



function Signin() {
  return (
   
      <div className=" w-80 h-120  m-auto bg-gray-200 ">
        <form className="flex flex-col justify-center items-center p-5">
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <input type="text" placeholder="Username" className="w-64 p-2 mb-4 border border-gray-300 rounded"/>
            <input type="email" placeholder="Email" className="w-64 p-2 mb-4 border border-gray-300 rounded"/>
            <input type="password" placeholder="Password" className="w-64 p-2 mb-4 border border-gray-300 rounded"/>
            <input type="password" placeholder="Confirm Password" className="w-64 p-2 mb-4 border border-gray-300 rounded"/>
            <button type="submit" className="w-64 p-2 bg-sky-400 text-white mt-3 rounded hover:bg-green-500 transition-all duration-300">Sign In</button>
        <GoogleLogin/>

        </form>

      </div>
   
  );
}

export default Signin;

//90552372382-lrce96g69748g7br4ncosq9qq9ktn6fi.apps.googleusercontent.com






