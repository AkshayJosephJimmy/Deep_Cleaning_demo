import GoogleLogin from "./GoogleLogin";


function Login() {
  const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

  function handleSubmit(e){
    e.preventDefault();
    
    axios.post("http://localhost:5001/auth/login", {
      username: username,
      email: email,
      password: password
    }).then((response)=>{
      console.log(response.data);
      localStorage.setItem("token",response.data.token);
      console.log(localStorage.getItem("token"));
      navigate('/booking');  
    }).catch((error)=>{
      console.error("Login error:", error);
      alert("Login failed. Please check your credentials and try again.");
    });
  }
  return (
     
      <div className=" w-80 h-120  m-auto bg-gray-200 ">
        <form className="flex flex-col justify-center items-center p-5" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} className="w-64 p-2 mb-4 border border-gray-300 rounded"/>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-64 p-2 mb-4 border border-gray-300 rounded"/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-64 p-2 mb-4 border border-gray-300 rounded"/>
          
            <button type="submit" className="w-64 p-2 bg-sky-400 text-white mt-3 rounded hover:bg-green-500 transition-all duration-300">Login</button>

        

        <GoogleLogin/>
        </form>

      </div>
    
  );
}

export default Login;








