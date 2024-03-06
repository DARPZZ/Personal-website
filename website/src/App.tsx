import { useState } from 'react'
import NavBar from "./Components/NavBar"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
       <div className='nav-bar'>
        <NavBar></NavBar>
      </div>
    </div>
  )
}

export default App
