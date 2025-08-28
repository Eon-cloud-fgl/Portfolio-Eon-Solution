import '../styles/home.css';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Languages from '../components/Languages';
import About from '../components/About';
import Footer from '../components/Footer';
import News from '../components/News';
import Team from '../components/Team';

export default function Home() {
    return (
        <>
            <div className='home-container'>
                <Hero />
                <Services />
                <Languages />
                <About />
                <News />
                <Footer />
            </div>
        </>
    )
}


