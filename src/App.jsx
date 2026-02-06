import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home/Home"
import Cart from "./pages/Home/Cart/Cart"
import PlaceOrder from "./pages/Home/PlaceOrder/PlaceOrder"
import Footer from "./components/footer/Footer"
import { useState } from "react"
import LoginPopup from "./components/loginpopup/LoginPopup"
function App() {
  const[showLogin ,setShowLogin]=useState(false)
  

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/PlaceOrder" element={<PlaceOrder/>}/>
        </Routes>
      </div>
     
     <Footer/>
    </>
  )
}

export default App
