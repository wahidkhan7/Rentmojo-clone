// <<<<<<< HEAD
import React from 'react'
// import { useState } from 'react'
// // import {  Route, Routes, useLocation,Link } from 'react-router-dom';




// function App() {
 

//   return (
//     <>
      
//     </>
// =======
// import { useState } from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Slider from "./components/Slider";
import Ifooter from "./components/Ifooter";
import Footer from "./components/Footer";
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
// >>>>>>> 01df56ba2ba8aa81fc2594337d10ca2f736addf7
  )
}

export default App
