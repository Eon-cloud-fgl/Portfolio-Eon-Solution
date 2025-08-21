import '../styles/Home.css';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Languages from '../components/languages';
import React, { useRef, useEffect } from 'react';

export default function Home() {
    return (
        <>
            <div className='home-container'>
                <Hero />
                <Services />
                <Languages />

                <Services />
            </div>
        </>
    )
}


