import { Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from './pages/Home.jsx'
import Copyright from './components/Copyright.jsx';
import './styles/Global.css';
function App() {

  return (
  <div className='app-container'>
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
