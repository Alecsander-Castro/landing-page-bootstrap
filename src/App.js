import React, { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

import {BrowserRouter as Router, Routes , Route } from 'react-router-dom';




function App() {


  useEffect(() =>{
    AOS.init()
    AOS.refresh()
  },[])
  


  return (

    <>
        <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
        </Router>
    </>
  )
}

export default App;
