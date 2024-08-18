
import Footer from './components/Footer'
import HeroSec from './components/HeroSec'
import Navbar from './components/Navbar'
import CarDetails from './pages/CarDetails'
import UserPage from './pages/UserPage'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main_page";
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/details" element={<CarDetails/>}/>
        <Route path="/profile" element={<UserPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
