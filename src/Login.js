import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Pokeyloggeado from './PokeyLoggeado';
import React from "react";
import "./App.css";

const imagenes = require.context('./imagenes/');
const Login = () => {
    const [nombre, setnombre] = useState({Nombre:''});
   const [email, setemail] = useState("");

  
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        navigate('/Home', { state: { car: nombre } });

    };
    return (
        <div>
            <section class="formulario">
            <form onSubmit={handleSubmit}>
                <img src={imagenes("./logo2.png")} alt="Logo" height="100" />

                <h1>REGISTRATE</h1>
                <input type="text" name="name" placeholder="Nombre completo"  onChange={event => setnombre(event.target.value) }
                value={nombre.name}/>
                <input type="email" name="email" placeholder="Email"  onChange={event => setemail(event.target.value)}
                value={email}/>
                <input type="submit" name="register"/>

            </form>
            </section>
        </div>
        
    )   
};


export default Login;