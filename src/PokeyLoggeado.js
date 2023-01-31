import React from "react";


const imagenes = require.context('./imagenes/');
const PokeyLoggeado = () => (
    <div class="main-log">
    <form method="post" action="PokeyLoggeado">
        <img   src="imagenes/logo2.png" alt="Logo"   height="100" />

    	<h1>REGISTRATE</h1>

		
    	<input type="text" name="name" placeholder="Nombre completo"/>
    	<input type="email" name="email" placeholder="Email"/>
    	<input type="submit" name="register"/>
    </form>
    </div>
    );

    export default PokeyLoggeado;