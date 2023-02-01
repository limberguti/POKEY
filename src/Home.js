import React, { useState } from "react";
import "./App.css"
import Modal from "./Modal";




const imagenes = require.context('./imagenes/');




const Home = (children) => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => {
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
    };

    return (

        <div class="main">
            <header >
                <img align ="center" src={imagenes("./logo.png")} alt="Logo" height="200" />

                
               
                
                <div class="conteiner">
                <a href="Factura" ><img align="right" src={imagenes("./carrito.png")} alt="carro" height="40" /></a>
                <br></br>
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
                                <img src={imagenes("./modelo a.png")} alt="Modelo" height="300" />
                            </div>

                            <div class="descripcion-producto">

                                <p>Camisa negra con bordados para hombre</p>

                            </div>

                            <div class="btncat">

                                <button type="submit" class="boton-catalogo" onclick={open}>Ver más </button>

                                <Modal >

                                    <svg style={{
                                        width: '60px',
                                        marginTop: '-30px',
                                        borderRadius: '50%',

                                        backgroundColor: '#Ffbd59',
                                    }} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hanger" width="56" height="56" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M15 7a3 3 0 1 0 -3 3v2m0 0l-8.624 5.488a0.82 .82 0 0 0 .44 1.512h16.368a0.82 .82 0 0 0 .44 -1.512l-8.624 -5.488z" />
                                    </svg>


                                    <h2>Camisa Manga Corta Talla G</h2>
                                    <p>Elaborada de manera artesanal en Quito. Inspira la naturaleza y luce elegante</p>
                                    <p class="precio"><span>Precio:</span> 12$</p>
                                    <button style={{
                                        width: '100px',
                                        marginTop: '2rem',
                                        background: '#000',
                                        color: '#fff',
                                        border: 0,
                                        fontSize: '13px',
                                        padding: '10px 0',
                                        outline: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        textTransform: 'uppercase',
                                        position: 'relative'
                                    }} onclick={close}>comprar</button>


                                </Modal>

                            </div>
                        </div>

                        <div class="producto">

                            <div class="imagen-producto">
                                <img src={imagenes("./modelo b.png")} alt="Modelo" height="300" />
                            </div>

                            <div class="descripcion-producto">
                                <p>Camisa blanca bordada y sombrero para mujer</p>

                            </div>
                            <div class="btncat">
                                <button type="submit" class="boton-catalogo" onclick={open}>Ver más </button>

                                <Modal >

                                    <svg style={{
                                        width: '60px',
                                        marginTop: '-30px',
                                        borderRadius: '50%',

                                        backgroundColor: '#Ffbd59',
                                    }} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hanger" width="56" height="56" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M15 7a3 3 0 1 0 -3 3v2m0 0l-8.624 5.488a0.82 .82 0 0 0 .44 1.512h16.368a0.82 .82 0 0 0 .44 -1.512l-8.624 -5.488z" />
                                    </svg>


                                    <h2>Sombrero + Camisa  Talla M</h2>
                                    <p>Adquirido en mi viaje a Ibarra, vendo camisa artesanal semi-nueva con sombrero de alta calidad</p>
                                    <p class="precio"><span>Precio:</span> 8$</p>
                                    <button style={{
                                        width: '100px',
                                        marginTop: '2rem',
                                        background: '#000',
                                        color: '#fff',
                                        border: 0,
                                        fontSize: '13px',
                                        padding: '10px 0',
                                        outline: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        textTransform: 'uppercase',
                                        position: 'relative'
                                    }} onclick={close}>comprar</button>


                                </Modal>


                            </div>
                        </div>

                        <div class="producto">

                            <div class="imagen-producto">
                                <img src={imagenes("./modelo c.png")} alt="Modelo" height="300" />
                            </div>

                            <div class="descripcion-producto">
                                <p>Pantalón gris para hombre</p>
                            </div>
                            <div class="btncat">

                                <button type="submit" class="boton-catalogo" onclick={open}>Ver más </button>

                                <Modal >

                                    <svg style={{
                                        width: '60px',
                                        marginTop: '-30px',
                                        borderRadius: '50%',

                                        backgroundColor: '#Ffbd59',
                                    }} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hanger" width="56" height="56" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M15 7a3 3 0 1 0 -3 3v2m0 0l-8.624 5.488a0.82 .82 0 0 0 .44 1.512h16.368a0.82 .82 0 0 0 .44 -1.512l-8.624 -5.488z" />
                                    </svg>


                                    <h2>Pantalon Corte en V Talla G</h2>
                                    <p>Pantalón usado, buen estado.Detalles minimos que resaltan tu outfit</p>
                                    <p class="precio"><span>Precio:</span> 5$ o negociable</p>
                                    <button style={{
                                        width: '100px',
                                        marginTop: '2rem',
                                        background: '#000',
                                        color: '#fff',
                                        border: 0,
                                        fontSize: '13px',
                                        padding: '10px 0',
                                        outline: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        textTransform: 'uppercase',
                                        position: 'relative'
                                    }} onclick={close}>comprar</button>


                                </Modal>

                            </div>
                        </div>

                        <div class="producto">

                            <div class="imagen-producto">
                                <img src={imagenes("./modelo d.png")} alt="Modelo" height="300" />
                            </div>

                            <div class="descripcion-producto">
                                <p>Pulsera multicolor</p>
                            </div>
                            <div class="btncat">

                                <button type="submit" class="boton-catalogo" onclick={open}>Ver más </button>

                                <Modal >

                                    <svg style={{
                                        width: '60px',
                                        marginTop: '-30px',
                                        borderRadius: '50%',

                                        backgroundColor: '#Ffbd59',
                                    }} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hanger" width="56" height="56" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M15 7a3 3 0 1 0 -3 3v2m0 0l-8.624 5.488a0.82 .82 0 0 0 .44 1.512h16.368a0.82 .82 0 0 0 .44 -1.512l-8.624 -5.488z" />
                                    </svg>


                                    <h2>Pulseras Multicolores Paquete</h2>
                                    <p>Pulsera artesanales de diferentes colores. Ideales para amantes de las artesanías</p>

                                    <p class="precio"><span>Precio:</span> 1$</p>
                                    <button style={{
                                        width: '100px',
                                        marginTop: '2rem',
                                        background: '#000',
                                        color: '#fff',
                                        border: 0,
                                        fontSize: '13px',
                                        padding: '10px 0',
                                        outline: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        textTransform: 'uppercase',
                                        position: 'relative'
                                    }} onclick={close}>comprar</button>


                                </Modal>


                            </div>
                        </div>

                        <div class="producto">

                            <div class="imagen-producto">
                                <img src={imagenes("./modelo e.png")} alt="Modelo" height="300" />
                            </div>

                            <div class="descripcion-producto">
                                <p>Sudadera Verde Uni-sex</p>
                            </div>
                            <div class="btncat">

                                <button type="submit" class="boton-catalogo" onclick={open}>Ver más </button>

                                <Modal >

                                    <svg style={{
                                        width: '60px',
                                        marginTop: '-30px',
                                        borderRadius: '50%',

                                        backgroundColor: '#Ffbd59',
                                    }} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hanger" width="56" height="56" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M15 7a3 3 0 1 0 -3 3v2m0 0l-8.624 5.488a0.82 .82 0 0 0 .44 1.512h16.368a0.82 .82 0 0 0 .44 -1.512l-8.624 -5.488z" />
                                    </svg>


                                    <h2>Sudadera Verde Talla G Casi-Nuevo</h2>
                                    <p>Comprado en un viaje a Italia, usado solo en el viaje de regreso</p>
                                    <p class="precio"><span>Precio:</span> 15$</p>
                                    <button style={{
                                        width: '100px',
                                        marginTop: '2rem',
                                        background: '#000',
                                        color: '#fff',
                                        border: 0,
                                        fontSize: '13px',
                                        padding: '10px 0',
                                        outline: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        textTransform: 'uppercase',
                                        position: 'relative'
                                    }} onclick={close}>comprar</button>


                                </Modal>


                            </div>

                        </div>

                        <div class="producto">

                            <div class="imagen-producto">
                                <img src={imagenes("./modelo f.png")} alt="Modelo" height="300" />
                            </div>

                            <div class="descripcion-producto">
                                <p>Vestido tipo camisa azul para mujer</p>
                            </div>
                            <div class="btncat">

                                <button type="submit" class="boton-catalogo" onclick={open}>Ver más </button>

                                <Modal >

                                    <svg style={{
                                        width: '60px',
                                        marginTop: '-30px',
                                        borderRadius: '50%',

                                        backgroundColor: '#Ffbd59',
                                    }} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hanger" width="56" height="56" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M15 7a3 3 0 1 0 -3 3v2m0 0l-8.624 5.488a0.82 .82 0 0 0 .44 1.512h16.368a0.82 .82 0 0 0 .44 -1.512l-8.624 -5.488z" />
                                    </svg>


                                    <h2>Vestido Casi-Nuevo Corte en T</h2>
                                    <p>Usado solo para una boda, combina con todo</p>
                                    <p class="precio"><span>Precio:</span> 10$</p>
                                    <button style={{
                                        width: '100px',
                                        marginTop: '2rem',
                                        background: '#000',
                                        color: '#fff',
                                        border: 0,
                                        fontSize: '13px',
                                        padding: '10px 0',
                                        outline: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        textTransform: 'uppercase',
                                        position: 'relative'
                                    }} onclick={close}>comprar</button>


                                </Modal>


                            </div>

                        </div>

                        <div class="producto">

                            <div class="imagen-producto">
                                <img src={imagenes("./modelo g.png")} alt="Modelo" height="300" />
                            </div>

                            <div class="descripcion-producto">
                                <p>Camiseta a rayas para mujer</p>
                            </div>
                            <div class="btncat">

                                <button type="submit" class="boton-catalogo" onclick={open}>Ver más </button>

                                <Modal >

                                    <svg style={{
                                        width: '60px',
                                        marginTop: '-30px',
                                        borderRadius: '50%',

                                        backgroundColor: '#Ffbd59',
                                    }} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hanger" width="56" height="56" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M15 7a3 3 0 1 0 -3 3v2m0 0l-8.624 5.488a0.82 .82 0 0 0 .44 1.512h16.368a0.82 .82 0 0 0 .44 -1.512l-8.624 -5.488z" />
                                    </svg>


                                    <h2>Camiseta Blanco y Negro Semi-Nuevo</h2>
                                    <p>Solo usado como pijama durante dos meses, prácticamente nuevo.</p>
                                    <p class="precio"><span>Precio:</span> 5$</p>
                                    <button style={{
                                        width: '100px',
                                        marginTop: '2rem',
                                        background: '#000',
                                        color: '#fff',
                                        border: 0,
                                        fontSize: '13px',
                                        padding: '10px 0',
                                        outline: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        textTransform: 'uppercase',
                                        position: 'relative'
                                    }} onclick={close}>comprar</button>


                                </Modal>


                            </div>

                        </div>

                        <div class="producto">

                            <div class="imagen-producto">
                                <img src={imagenes("./modelo h.png")} alt="Modelo" height="300" />
                            </div>

                            <div class="descripcion-producto">
                                <p>Camisa azul con bordados</p>
                            </div>
                            <div class="btncat">

                                <button type="submit" class="boton-catalogo" onclick={open}>Ver más </button>

                                <Modal >

                                    <svg style={{
                                        width: '60px',
                                        marginTop: '-30px',
                                        borderRadius: '50%',

                                        backgroundColor: '#Ffbd59',
                                    }} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hanger" width="56" height="56" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M15 7a3 3 0 1 0 -3 3v2m0 0l-8.624 5.488a0.82 .82 0 0 0 .44 1.512h16.368a0.82 .82 0 0 0 .44 -1.512l-8.624 -5.488z" />
                                    </svg>


                                    <h2>Camisa con bordados artesanales</h2>
                                    <p>Elaborada cada punzada con finura, esta camisa contiene suturas y grabados únicos</p>
                                    <p class="precio"><span>Precio:</span> 15$</p>
                                    <button style={{
                                        width: '100px',
                                        marginTop: '2rem',
                                        background: '#000',
                                        color: '#fff',
                                        border: 0,
                                        fontSize: '13px',
                                        padding: '10px 0',
                                        outline: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        textTransform: 'uppercase',
                                        position: 'relative'
                                    }} onclick={close}>comprar</button>


                                </Modal>


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
                    <img src={imagenes("./redes.png")} alt="Publicidad" width="232" />
                    <br></br>
                </footer>
            </div>

        </div>
    )
}

    ;

export default Home;