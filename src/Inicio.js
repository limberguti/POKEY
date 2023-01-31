import React from "react";
import "./App.css";

const imagenes = require.context('./imagenes/');
const Inicio = () => (
    

        <div class = "inicio">
        <div class="gif-inicio">

        <video autoplay loop muted plays-inline class="back-video">
            <source src={imagenes("./inicio.mp4")} type="video/mp4" />
        </video>

        <nav class="navegacion-inicio">
            <img src={imagenes("./logo2.png")}  class="logo" width="500" />
            <ul>
                <li><a href="Nosotros">Pokey</a></li>
                <li><a href="Integrantes">Quienes Somos?</a></li>
                <li><a href="Login">Login</a></li>

            </ul>
        </nav>

        <div class="contenido-inicio">
            <h1>Bienvenido </h1>
            <a class="boton" href="Home">Comprar Ahora</a>
        </div>

        </div>
    </div>

    
    );

export default Inicio;