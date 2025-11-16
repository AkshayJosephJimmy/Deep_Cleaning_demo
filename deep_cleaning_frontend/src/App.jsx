import { Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Header from "./components/Header"
import BookingPage from "./components/BookingPage"
import AccountHeader from "./components/AccountHeader"
import Signin from "./components/Signin"





function App(){

  

  return(
    <div >
      
      <Routes>
        <Route path="/" element={ <><Header /> <Body /></>} />
        <Route path="/booking" element={<><AccountHeader/><BookingPage/></>} />
        <Route path="/signin" element={<Signin/>}/>
      </Routes>
      
      
    </div>
  )
}
export default App