import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link,useNavigate } from "react-router-dom";
import Home from "./Home";
import Inicio from "./Inicio";
import Integrantes from "./Integrantes";
import Login from "./Login";
import PokeyLoggeado from "./PokeyLoggeado";
import Nosotros from "./Nosotros";



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
      </Routes>
      
    </BrowserRouter>
   

  );


}



export default App;
