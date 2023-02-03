import React from "react";

import "./App.css"

const imagenes = require.context('./imagenes/');
const Nosotros = () => (

    <div class="main">
        <header>
            <div class="logo-pokey">
                <img src={imagenes("./logo.png")} />
            </div>

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


        <section className="fast">
            <div className="contfast">
                <p>¿Sabías qué...?</p>
            </div>

        </section>



        <section className="texto">
            <aside align="center">
                <img src={imagenes("./ecofashionista.png")} alt="Publicidad" width="300" height="440" />
                <br></br>
            </aside>

            <p>Cada año, la industria textil produce alrededor de 92 millones de toneladas de basura, siendo solo
                superada en impacto ecológico por la industria petrolera.</p>

            <p> Una de las razones de
                porque la industria textil posee estos índices de contaminación es debido al fast fashion.</p>

            <p> Pero, ¿a qué se refiere el <strong>fast fashion</strong>? </p>

            <p>Esta es una industria que va dirigido a la elaboración de prendas, pero en grandes proporciones en
                conjunto a tendencias que salen a la luz de manera seguida con una constante necesidad de
                innovación y una colocación de millones de prendas a precios accesibles y totalmente nuestro
                alcance generando una compra apresurada. </p>

            <p>Nosotros somos <strong>Pockey</strong>, y venimos a revolucionar tu forma de ver el mundo de la moda. Cuestionamos estas
                prácticas y pensamos en soluciones innovadoras y sustentables. Podrás, a través de nuesta página web,
                comprar de negocios locales, muchísimo más verdes y accesibles que cualquier tienda de fast fashion, y te
                hablamos acerca de la moda circular, en donde tu closet no dejará de innovarse.

            </p>
            <br></br>
            <br></br>

            <p1><strong>Consecuencias del Fast Fashion</strong></p1>
            <br></br><br></br><br></br>
        </section>

        <section align="center">

            <div class="flex-container1">

                <div class="flex-itemi"><img src={imagenes("./contaminacion.jpg")} alt="Conciencia" width="430" height="300" /></div>
                <div class="flex-itemi"><img src={imagenes("./contaminacion2.jpg")} alt="Conciencia" width="430" height="300" /></div>
                <div class="flex-itemi"><img src={imagenes("./contaminacion3.jpg")} alt="Conciencia" width="430" height="300" /></div>
            </div>
        </section>

        <footer>
            <br></br>
            <p class="direccion">Dirección: Av. Río Coca y Mariana de Jesús, atras del colegio Benalcazar</p>
            <p class="direccion">Pokey Enterprise © 2022. Derechos Reservados</p>
            <img src={imagenes("./redes.png")} alt="Publicidad" width="232" />
            <br></br>
        </footer>

    </div>
);

export default Nosotros;