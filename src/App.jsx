import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/nav/navbar'
import Footer from './components/footer/Footer'
import { ToastContainer } from 'react-toastify';
import Shop from './pages/Home/shop/Shop'
import Cart from './pages/cart/Cartpage'
import Contact from "./pages/contact/Contact"
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </>
  )
}

export default App