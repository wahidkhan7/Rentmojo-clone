// import { useState } from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Slider from "./components/Slider";
import Ifooter from "./components/Ifooter";
import Footer from "./components/Footer";
// import {  Route, Routes, useLocation,Link } from 'react-router-dom';
// import AllRoutes from "./Pages/AllRoutes";
import './App.css'
import { ChakraProvider } from '@chakra-ui/react';
function App() {

  return (
    <ChakraProvider>
      <div className='otrdiv'>
      <Navbar/>
      <Hero/>
      <Categories/>
      <Slider/>
      <Ifooter/>
      <Footer/>
    </div>
    </ChakraProvider>
  )
}

export default App
