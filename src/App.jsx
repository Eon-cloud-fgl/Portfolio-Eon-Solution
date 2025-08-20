import { useState } from 'react'
import { Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from './pages/Home.jsx'
import './styles/global.css';
function App() {

  return (
  <div className='app-container'>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
  </div>
  )
}

export default App
