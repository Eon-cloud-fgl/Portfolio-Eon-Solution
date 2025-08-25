import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar"
import Home from './pages/Home.jsx'
import Copyright from './components/Copyright.jsx';
import TVNoise from "./components/NoiseBackground.jsx";
import Loader from './components/Loader.jsx';
import './styles/Global.css';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula un delay de carga (puede ser por fetch, etc.)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 segundos de "loading"

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

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
