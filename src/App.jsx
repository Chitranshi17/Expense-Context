import React, { useState } from 'react'

// import Toastify 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HeroSection from './Components/HeroSection'
import { ExpenseProvider } from './Context/ExpenseContext';
import Navbar from './Components/Navbar';


const App = () => {

  return (
   <ExpenseProvider>
   <Navbar/>
   <HeroSection/> 
   <ToastContainer/>
   </ExpenseProvider>
  )
}

export default App
