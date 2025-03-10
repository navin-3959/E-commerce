import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/nav/navbar'
import Footer from './components/footer/Footer'
import Shop from './pages/Home/shop/Shop'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </>
  )
}

export default App