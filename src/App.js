import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link,useNavigate } from "react-router-dom";
import Home from "./Home";
import Inicio from "./Inicio";
import Integrantes from "./Integrantes";
import Login from "./Login";
import PokeyLoggeado from "./PokeyLoggeado";
import Nosotros from "./Nosotros";
import Factura from "./Factura";
import Vender from "./Vender";



function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pokeyloggeado" element={<PokeyLoggeado />} />
        <Route path="/" exact component={<Login/>}/>
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/factura" element={<Factura />} />
        <Route path="/vender" element={<Vender />} />
      </Routes>
      
    </BrowserRouter>
   

  );

  


}



export default App;
