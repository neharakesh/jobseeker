import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import { ToastContainer } from 'react-toastify';

function App() {
  return(
    <>
    <Navbar/>
    <ToastContainer position="top-center" />
    <Outlet/>
    </>
  )
}

export default App
