import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/pages/Header.jsx/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/pages/Footer/Footer'

function App() {
 

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
