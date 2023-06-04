import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/pages/Header.jsx/Header'
import { Outlet } from 'react-router-dom'

function App() {
 

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>

    </>
  )
}

export default App
