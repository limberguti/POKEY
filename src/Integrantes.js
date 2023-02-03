
import React from "react";

import "./App.css";

const imagenes = require.context('./imagenes/');
const Integrantes = () => (
    <div>
        <header>



            <div class="logo-pokey">
                <img src={imagenes("./logo.png")} />
            </div>


            <br></br>
            <div class="conteiner">
                <nav class="navegacion">
                    <ul>
                        <li><a href="Inicio">Inicio</a></li>
                        <li><a href="Nosotros">Pokey</a></li>
                        <li><a href="Home">Venta/Intercambios</a></li>
                        <li><a href="Integrantes">Quienes Somos?</a></li>
                    </ul>

                </nav>
            </div>

        </header>
        <section align="center">

            <div class="flex-container">
                <div class="flex-item2">
                    <div class="flex-item1"><h3>Integrantes</h3></div>
                    <div class="flex-item3"><img src={imagenes("./fotoCami.jpeg")} width="200" height="200" align="center" /></div>
                    <div class="flex-item3"><img src={imagenes("./fotoLuca.png")} width="200" height="200" align="center" /></div>
                    <div class="flex-item3"><img src={imagenes("./fotoJorge.jpeg")} width="200" height="200" align="center" /></div>
                    <div class="flex-item3"><img src={imagenes("./fotoLimber.jpeg")} width="200" height="200" align="center" /></div>


                </div>
                <div class="flex-item5">
                    <div class="flex-item4"><h3>Descripción</h3></div>

                    <div class="flex-item6">Camila Rivera, estudiante de Ingeniería en software del cuarto
                        nivel, tengo 19 años y soy fanática de la informática y la
                        apicultura. Me encuentro encargada en liderar el proyecto y
                        coordinar todas las parte del mismo.</div>
                    <div class="flex-item6">Luca De Veintemilla, estudiante de Ingeniería en software del cuarto
                        nivel, tengo 19 años apasionado por el automovilismo y me encuentro
                        encargado de optimizar la parte visual de la página web (Front End).</div>
                    <div class="flex-item6">Jorge Nasimba, estudiante de Ingeniería en software del cuarto
                        nivel, tengo 20 años, me gusta reparar computadoras . Estoy
                        encargado del Back End de la página.</div>
                    <div class="flex-item6">Limber Gutierrez, estudiante de Ingeniería en software del cuarto
                        nivel, tengo 21 años, me encanta la informática. Estoy encargado del Back End de la pagina</div>
                </div>
            </div>
        </section>

        <footer>
            <br></br>
            <p>Dirección: Av. Río Coca y Mariana de Jesús, atras del colegio Benalcazar</p>
            <p>Pokey Enterprise © 2022. Derechos Reservados</p>
            <img src={imagenes("./redes.png")} alt="Publicidad" width="232" />
            <br></br>
        </footer>

    </div>



);

export default Integrantes;