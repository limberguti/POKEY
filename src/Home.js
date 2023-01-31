import React, { useState } from "react";

import "./App.css"



const imagenes = require.context('./imagenes/');


const Home = () => (

    

   <div class="main">
    <header align="center">
        <img src={imagenes("./logo.png")} alt="Logo"  height="200" />
    
        
       
    <div class="conteiner">
        <nav class="navegacion" >

                <ul>
                    <li><a href="Inicio">Inicio</a></li>
                    <li><a href="Nosotros">Pokey</a></li>
                    <li><a href="Integrantes">Quienes Somos?</a></li>
                </ul>
               
        </nav> 
       </div>
     
    
    </header>
    
    <div class="flex-body">

   
  
    
        
        <section class="parteBody">

            <div class="productos">

                <div class="producto">

                    <div class="imagen-producto">
                        <img  src={imagenes("./modelo a.png")} alt="Modelo" height="300"/>
                    </div>

                    <div class="descripcion-producto">
                        <p>Sudadera con capucha Tommy Hilfiger</p>
                        <p class="price">$25</p>
                        <button class="btn-add-cart">Añadir al carrito</button>
                    </div>

                </div>

                <div class="producto">

                    <div class="imagen-producto">
                       <img  src={imagenes("./modelo b.png")} alt="Modelo" height="300"/>
                    </div>

                    <div class="descripcion-producto">
                        <p>Tommy Hilfiger Tommy Jeans y capucha para hombres</p>
                        <p class="price">$30</p>
                        <button class="btn-add-cart">Añadir al carrito</button>
                    </div>

                </div>

                <div class="producto">

                    <div class="imagen-producto">
                        <img  src={imagenes("./modelo c.png")} alt="Modelo" height="300"/>
                    </div>

                    <div class="descripcion-producto">
                        <p>Tommy Hilfiger Tommy Jeans y capucha para hombres</p>
                        <p class="price">$15</p>
                        <button class="btn-add-cart">Añadir al carrito</button>
                    </div>

                </div>

                <div class="producto">

                    <div class="imagen-producto">
                        <img  src={imagenes("./modelo d.png")} alt="Modelo" height="300"/>
                    </div>

                    <div class="descripcion-producto">
                        <p>Tommy Hilfiger Tommy Jeans y capucha para hombres</p>
                        <p class="price">$14</p>
                        <button class="btn-add-cart">Añadir al carrito</button>
                    </div>

                </div>

                <div class="producto">

                    <div class="imagen-producto">
                        <img  src={imagenes("./modelo e.png")} alt="Modelo" height="300"/>
                    </div>

                    <div class="descripcion-producto">
                        <p> Chaqueta casual a cuadros para mujer y mezcla de lana, botones, manga larga, chaqueta de otoño</p>
                        <p class="price">$30</p>
                        <button class="btn-add-cart">Añadir al carrito</button>
                    </div>

                </div>

                <div class="producto">

                    <div class="imagen-producto">
                        <img  src={imagenes("./modelo f.png")} alt="Modelo" height="300"/>
                    </div>

                    <div class="descripcion-producto">
                        <p> Chaqueta casual a cuadros para mujer y mezcla de lana, botones, manga larga, chaqueta de otoño</p>
                        <p class="price">$22</p>
                        <button class="btn-add-cart">Añadir al carrito</button>
                    </div>

                </div>

                <div class="producto">

                    <div class="imagen-producto">
                        <img  src={imagenes("./modelo g.png")} alt="Modelo" height="300"/>
                    </div>

                    <div class="descripcion-producto">
                        <p> Chaqueta casual a cuadros para mujer y mezcla de lana, botones, manga larga, chaqueta de otoño</p>
                        <p class="price">$18</p>
                        <button class="btn-add-cart">Añadir al carrito</button>
                    </div>

                </div>

                <div class="producto">

                    <div class="imagen-producto">
                        <img  src={imagenes("./modelo h.png")} alt="Modelo" height="300"/>
                    </div>

                    <div class="descripcion-producto">
                        <p> Chaqueta casual a cuadros para mujer y mezcla de lana, botones, manga larga, chaqueta de otoño</p>
                        <p class="price">$30</p>
                        <button class="btn-add-cart">Añadir al carrito</button>
                    </div>

                </div>



            </div>

        </section>

        <aside align="center">
            <br></br>

            <img src={imagenes("./oferta.png")} alt="Publicidad" width="232" height="300" />
            <img src={imagenes("./oferta2.jpg")} alt="Publicidad" width="232" height="300" />
            <img src={imagenes("./oferta3.jpg")} alt="Publicidad" width="232" height="300" />
            <img src={imagenes("./oferta4.png")} alt="Publicidad" width="232" height="300" />
            <br></br>


        </aside>
   

    

    </div>
    <div class="footer">
        <footer>
            <br></br>
            <p>Dirección: Av. Río Coca y Mariana de Jesús, atras del colegio Benalcazar</p>
            <p>Pokey Enterprise © 2022. Derechos Reservados</p>
            <img  src={imagenes("./redes.png")} alt="Publicidad" width="232" />
            <br></br>
        </footer>
    </div>

    </div>
);

export default Home;