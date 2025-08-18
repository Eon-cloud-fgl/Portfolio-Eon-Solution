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
    
    // Logica para pausar el video despues de 15 segundos
    const videoRef = useRef(null); // Creamo la referencia con un valor mutable inicial de null
    useEffect(() => {
        const video = videoRef.current; // Creamos una constante que va a contener la referencia al video
        // Si el video existe, configuramos un timer para pausarlo
        if (video) {
            const timer = setTimeout(() => {
                video.pause(); // Pausamos el video despues de 3 segundos
            }, 15000) // 15000 milisegundos = 15 segundos
        
            return () => clearTimeout(timer); // Limpiamos el timer al desmontar el componente
        }
    }, []); // El array vacio [] hace que este efecto se ejecute solo una vez al iniciar el componente
    

    // Renderizamos el banner con el video con texto de bienvenida y frase
    return (
        <div className="banner">
            <div className="title-content">
                <h1>Te damos la bienvenida a Eon Solutions</h1>
                <p>Inverti en soluciones, nosotros te las proponemos</p>
            </div>

            <div className="banner-video-container">
                <video ref={videoRef} className='banner-video' autoPlay loop muted>
                    <source src="/animacion_inicial.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

