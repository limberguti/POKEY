import React from "react";
import "./App.css"

const imagenes = require.context('./imagenes/');

const Factura = () => (



    <div >
        <header>

            <div class="logo-pokey">
                <img src={imagenes("./logo.png")}  />
            </div>

            
            <div class="conteiner">
                <nav class="navegacion">
                    <ul>
                        <li><a href="Inicio">Inicio</a></li>
                        <li><a href="Nosotros">Pokey</a></li>
                        <li><a href="Pokey">Venta/Intercambios</a></li>
                        <li><a href="Integrantes">Quienes Somos?</a></li>
                    </ul>

                </nav>
            </div>

        </header>
        <header class="row">
            <div class="logoholder text-center" >
                <img src={imagenes("./logo.png")}  alt="" />
            </div>

            <div class="me">
                <p contenteditable>
                    <strong>Estamos ubicados en las calles Eduardo Salazar Gómez y Diego Noboa, Casa #8, atras de Akkon Sport</strong>
                    Sangolqui<br></br>
                    Ecuador

                </p>
            </div>

            <div class="info">
                <p contenteditable>
                    Web: <a href="#">www.Duck.com</a><br></br>
                    E-mail: <a href="#">lmde2@espe.edu.ec</a><br></br>
                    Tel: +256 99 5225 177<br></br>

                </p>
            </div>

            <div class="bank">
                <p contenteditable>
                    Datos bacarios: <br></br>
                    Titular de la cuenta:
                    IBAN:
                    BIC:
                </p>
            </div>

        </header>


        <div class="row-2 section">

            <div class="col-2">
                <h1 contenteditable>Factura</h1>
            </div>

            <div class="col-2 text-right details">
                <p contenteditable>
                    Fecha: <input type="text" class="datePicker" /><br></br>
                    Factura #: <input type="text" value="100" /><br></br>
                    Vence: <input class="twoweeks" type="text" />
                </p>
            </div>



            <div class="col-2">


                <p contenteditable class="client">
                    <strong>Facturar a</strong><br></br>
                    Camila Rivera
                    Duck<br></br>
                    Sector La Carolina<br></br>
                    242-3365
                </p>
            </div>


            <div class="col-2">


                <p contenteditable class="client">
                    <strong>Enviar a</strong><br></br>
                    Luca De Veintemilla
                    Pokey<br></br>
                    Los Guaytambos y las Avellanas
                    282-3375
                </p>
            </div>



        </div>

        

        <div class="invoicelist-body">
            <table>
                <thead contenteditable>
                    <th width="5%">Código</th>
                    <th width="60%">Descripción</th>

                    <th width="10%">Cant.</th>
                    <th width="15%">Precio</th>
                    <th class="taxrelated">IVA</th>
                    <th width="10%">Total</th>
                </thead>
                <tbody>
                    <tr class="text-inputs">
                        <td width='5%'><a class="control removeRow" href="#">x</a> <span contenteditable>12345</span></td>
                        <td width='60%'><span contenteditable>Descripción</span></td>
                        <td class="amount"><input type="text" value="1" /></td>
                        <td class="rate"><input type="text" value="99" /></td>
                        <td class="tax taxrelated"></td>
                        <td class="sum"></td>
                    </tr>
                </tbody>
            </table>
            <a class="control newRow" href="#">+ Nueva fila</a>
        </div>

        <div class="invoicelist-footer">
            <table contenteditable>
                <tr class="taxrelated">
                    <td>IVA:</td>
                    <td id="total_tax"></td>
                </tr>
                <tr>
                    <td><strong>Total:</strong></td>
                    <td id="total_price"></td>
                </tr>
            </table>
        </div>
        


        <footer>
            <br></br>
            <p>Dirección: Av. Río Coca y Mariana de Jesús, atras del colegio Benalcazar</p>
            <p>Pokey Enterprise © 2022. Derechos Reservados</p>
            <img src={imagenes("./redes.png")}  alt="Publicidad" width="232" />
            <br></br>
        </footer>


    </div>

);

export default Factura;