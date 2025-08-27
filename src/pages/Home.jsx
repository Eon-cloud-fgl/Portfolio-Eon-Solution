import '../styles/Home.css';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/projects';
import Languages from '../components/languages';
import About from '../components/About';
import Footer from '../components/Footer';
import News from '../components/News';

export default function Home() {
    return (
        <>
            <div className='home-container'>
                <Hero />
                <Services />
                <Languages />
                <Projects />
                <About />
                <News />
                <Footer />
            </div>
        </>
    )
}


