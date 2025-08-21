import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from './pages/Home.jsx'
import Copyright from './components/Copyright.jsx';
import TVNoise from "./components/NoiseBackground.jsx";
import './styles/Global.css';
function App() {

  return (
    <div className='app-container'>
      <TVNoise />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Copyright />
    </div>
  )
}

export default App
