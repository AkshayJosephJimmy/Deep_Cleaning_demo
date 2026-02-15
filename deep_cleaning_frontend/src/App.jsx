import { Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Header from "./components/Header"
import BookingPage from "./components/BookingPage"
import AccountHeader from "./components/AccountHeader"
import Signin from "./components/Signin"
import RegisterCard from "./components/RegisterCard"
import { AuthProvider } from "./context/AuthProvider"
import { useContext } from "react"
import AuthContext from "./context/AuthContext.jsx"
import Dashboard from "./components/Dashboard.jsx"





function App()
{
  const {role}=useContext(AuthContext);
  console.log("User role in App.jsx:", role);

  return(
   <>
     {role==="customer" ?
    <div >

      
      <Routes>
        <Route path="/" element={ <><Header /> <Body /></>} />
        <Route path="/booking" element={<><AccountHeader/><BookingPage/></>} />
        <Route path="/signin" element={<RegisterCard/>}/>
      </Routes>

      
      
    </div>:<div>
       <Routes>
        <Route path="/" element={ <><AccountHeader/><Dashboard/></>} />
        <Route path="/signin" element={<RegisterCard/>}/>
        
      </Routes>

      </div>}
   </>
    
  )
}
export default App