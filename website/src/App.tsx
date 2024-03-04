import { useState } from 'react'
import NavBar from "./Components/NavBar"
import About from "./Components/About"
import './App.css'
import { Link, Route, Router, Routes } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className='nav-bar'>
        <NavBar></NavBar>
      </div>
      <div className='about'>
        <About></About>
      </div>
    </div>
  )
}

export default App
