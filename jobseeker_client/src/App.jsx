import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar.jsx'

function App() {
  return(
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
