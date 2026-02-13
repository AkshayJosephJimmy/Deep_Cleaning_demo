import { Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Header from "./components/Header"
import BookingPage from "./components/BookingPage"
import AccountHeader from "./components/AccountHeader"
import Signin from "./components/Signin"
import RegisterCard from "./components/RegisterCard"
import { AuthProvider } from "./context/AuthProvider"





function App()
{

  return(
    <AuthProvider>

    <div >
      
      <Routes>
        <Route path="/" element={ <><Header /> <Body /></>} />
        <Route path="/booking" element={<><AccountHeader/><BookingPage/></>} />
        <Route path="/signin" element={<RegisterCard/>}/>
      </Routes>
      
      
    </div>
    </AuthProvider>
  )
}
export default App