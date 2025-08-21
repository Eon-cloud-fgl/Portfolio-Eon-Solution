import '../styles/Home.css';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/projects';
import Languages from '../components/languages';
import About from '../components/About';
import React, { useRef, useEffect } from 'react';

export default function Home() {
    return (
        <>
            <div className='home-container'>
                <Hero />
                <Services />
                <Projects/>
            </div>
        </>
    )
}


