import '../styles/Home.css';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Languages from '../components/languages';
import About from '../components/About';
import Footer from '../components/Footer';
import News from '../components/News';
import Projects from '../components/Projects';
import Team from '../components/Team';

export default function Home() {
    return (
        <>
            <div className='home-container'>
                <Hero />
                <Services />
                <Languages />
                <About />
                <Projects />
                <News />
                <Footer />
            </div>
        </>
    )
}


