import '../styles/home.css';
import React, { useRef, useEffect } from 'react';


export default function Home(){
    return (
        <>
            <div>
                <Banner />
            </div>
        </>
    )
}

function Banner(){
    const videoRef = useRef(null);
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const timer = setTimeout(() => {
                
            })
        }
    }


    return (
        <div className="banner">
            <div className="banner-content">
                <h1>Te damos la bienvenida a Eon Solutions</h1>
                <p>Inverti en soluciones, nosotros te las proponemos</p>
            </div>

            <div className="banner-video-container">
                <video className='banner-video' autoPlay loop muted>
                    <source src="/animacion_inicial.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

