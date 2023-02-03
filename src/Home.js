import React, { useState } from "react";
import "./App.css"
import Modal from "./Modal";
import Cart from "./Cart"





const imagenes = require.context('./imagenes/');


const Home = (children) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [productCount, setProductCount] = useState(0);
    const clearCart = () => {
        setCart([]);
        setTotal(0);
    };

    const open = () => {
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
    };

    const addToCart = product => {
        const itemIndex = cart.findIndex(item => item.id === product.id);
        if (itemIndex === -1) {
            setCart([...cart, { ...product, quantity: 1 }]);
            setTotal(total + product.price);
            setProductCount(productCount + 1);
        } else {
            const updatedCart = [...cart];
            updatedCart[itemIndex].quantity++;
            setCart(updatedCart);
            setTotal(total + product.price);
            setProductCount(productCount + 1);
        }
    };
    const removeProduct = (id, quantity) => {
        const newCart = [...cart];
        const productIndex = newCart.findIndex(product => product.id === id);
        const product = newCart[productIndex];

        if (product.quantity <= quantity) {
            newCart.splice(productIndex, 1);
            setTotal(total - product.price * product.quantity);
        } else {
            product.quantity -= quantity;
            setTotal(total - product.price * quantity);
        }

        setCart(newCart);
    };

    const [showPopup, setShowPopup] = useState(false);

    const handleImageClick = () => {
        setShowPopup(!showPopup);
    };

    return (

        <div class="main">
            <header >
                <div class="logo-pokey">
                    <img src={imagenes("./logo.png")} />
                </div>


                <div class="conteiner">
                    <div style={{ position: 'relative' }}>
                        <img onClick={handleImageClick} src={imagenes("./carrito.png")} alt="Image" width={50} align="right" />
                        <span style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            background: 'red',
                            color: 'white',
                            borderRadius: '50%',
                            padding: '0.3em',
                        }}>{productCount}</span>
                    </div>
                    {showPopup && (
                        <div style={{
                            position: 'fixed', top: "100%", left: 50, width: '100%', height: '100%', display: 'center', justifyContent: 'center', alignItems: 'center'
                        }}><div style={{
                            width: '370px',
                            background: 'black',
                            borderRadius: 3,
                            top: -720,
                            left: '84.3%',
                            transform: 'translate(-50%, 0%)',
                            textAlign: 'center',
                            padding: 15,
                            color: 'white',
                            position: 'absolute',
                            zIndex: 9,
                            transition: 'transform 0.4s, top 0.4s', alignItems: 'center', boxShadow: '0px 0px 10px #000000',
                        }}>Tu carrito<button style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            background: '#000',
                            color: '#fff'
                        }} onClick={() => setShowPopup(false)}>X</button>
                                <div style={{
                                    width: '370px',
                                    background: '#b9b9b9',
                                    borderRadius: 3,
                                    top: "100%",
                                    left: '50%',
                                    transform: 'translate(-50%, 0%)',
                                    textAlign: 'center',
                                    padding: 32,
                                    color: '#000',
                                    position: 'absolute', boxShadow: '0px 0px 10px #000000',

                                    transition: 'transform 0.4s, top 0.4s'
                                }}>
                                    <ul>
                                        {cart.map(item => (

                                            <p key={item.id}>
                                                <table  >

                                                    <tbody>
                                                        <tr>
                                                            <td rowSpan={3}><img src={item.image} alt={item.name} style={{ width: "70px", height: "70px" }} /></td>
                                                            <td> {item.name}</td>

                                                        </tr>
                                                        <tr>
                                                            <td >{item.price}.00 $</td>


                                                        </tr>
                                                        <tr>

                                                            <td> {item.quantity} Unidades</td>

                                                        </tr>
                                                    </tbody>
                                                </table>



                                            </p>
                                        ))}
                                    </ul>


                                    <h3>Total: ${total}</h3>

                                    <a href="Factura" class="button">Ver Factura</a>

                                </div>
                            </div>

                        </div>
                    )}


                    <br></br>
                    <nav class="navegacion" >

                        <ul>

                            <li><a href="Inicio">Inicio</a></li>
                            <li><a href="Nosotros">Pokey</a></li>
                            <li><a href="Integrantes">Quienes Somos?</a></li>
                            <li><a href="Vender">Vender</a></li>



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
                                    }} onClick={() => addToCart({ id: 1, name: "Camisa Manga Corta Talla G", price: 12, image: imagenes("./modelo a.png") })}>Comprar
                                    </button>



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
                                    }} onClick={() => addToCart({ id: 2, name: "Sombrero + Camisa  Talla M", price: 8, image: imagenes("./modelo b.png") })}>Comprar
                                    </button>


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
                                    }} onClick={() => addToCart({ id: 3, name: "Pantalon Corte en V Talla G", price: 5, image: imagenes("./modelo c.png") })}>Comprar
                                    </button>



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
                                    }} onClick={() => addToCart({ id: 4, name: "Pulseras Multicolores Paquete", price: 1, image: imagenes("./modelo d.png") })}>Comprar
                                    </button>

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
                                    }} onClick={() => addToCart({ id: 5, name: "Sudadera Verde Talla G Casi-Nuevo", price: 15, image: imagenes("./modelo e.png") })}>Comprar
                                    </button>


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
                                    }} onClick={() => addToCart({ id: 6, name: "Vestido Casi-Nuevo Corte en T", price: 10, image: imagenes("./modelo f.png") })}>Comprar
                                    </button>




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
                                    }} onClick={() => addToCart({ id: 7, name: "Camiseta Blanco y Negro Semi-Nuevo", price: 5, image: imagenes("./modelo g.png") })}>Comprar
                                    </button>



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
                                    }} onClick={() => addToCart({ id: 8, name: "Camisa con bordados artesanales", price: 15, image: imagenes("./modelo h.png") })}>Comprar
                                    </button>

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
    );
}


export default Home;