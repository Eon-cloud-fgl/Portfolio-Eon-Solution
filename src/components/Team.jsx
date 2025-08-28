import React from "react";
import "../styles/team.css";

export default function Team() {
    return (
        <section className="team-container">
            <h1>Equipo</h1>
            <p>Conoce a los miembros de nuestro equipo</p>
            <div className="team-members">
                <div className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Miembro del equipo 1" />
                    <h2>Juan Pérez</h2>
                    <p>Desarrollador Web</p>
                </div>
                <div className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Miembro del equipo 2" />
                    <h2>Ana Gómez</h2>
                    <p>Especialista en Marketing Digital</p>
                </div>
                <div className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Miembro del equipo 3" />
                    <h2>Carlos López</h2>
                    <p>Consultor Tecnológico</p>
                </div>
            </div>
        </section>
    );
}