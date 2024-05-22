import React, { useState } from 'react'

// import Toastify 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Components/navbar'
import HeroSection from './Components/HeroSection'
import { ExpenseProvider } from './Context/ExpenseContext';


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
