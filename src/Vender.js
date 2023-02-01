import React from "react";
const imagenes = require.context('./imagenes/');

const Vender = () => (
    <div>
       
    <header align="center">
        <img   src={imagenes("./logo.png")} alt="Logo"   height="400" />
        
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
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Krub:wght@200&display=swap" rel="stylesheet" />
    </header>
  
    
    

    <section class="texto">

        <body>
          <div class="container">
            <h1>Publica tu articulo</h1>
        
            <form action="generar.php" method="POST" enctype="multipart/form-data">
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="title">Título del producto</label>
                    <input type="text" name="title" class="form-control"/>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="subtitle">Subtítulo</label>
                    <input type="text" name="subtitle" class="form-control"/>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="code">Código</label>
                    <input type="text" name="code" class="form-control" placeholder="MOD.0601072EG0-00"/>
                  </div>
                </div>
              </div>
        
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="product_image">Imagen del producto</label>
                    <input type="file" name="product_image" class="form-control"/>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="brand_image">Imagen de la marca</label>
                    <input type="file" name="brand_image" class="form-control"/>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="details_image">Imagen de especificaciones</label>
                    <input type="file" name="details_image" class="form-control"/>
                  </div>
                </div>
              </div>
              
              <div class="form-group">
                <label for="description">Descripción</label>
                <textarea name="description" rows="2" class="form-control"></textarea>
              </div>
        
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="dimensions">Categoria</label>
                    <div  class="opciones"> <select class="form-dropdown"  style="width:150px" data-component="dropdown" aria-label="categoria del product">
                      <option value="">Seleccione Porfavor</option>
                      <option value="Abrigos &amp; Camisetas">Abrigos &amp; Camisetas</option>
                      <option value="Pantalones">Pantalones</option>
                      <option value="Gorros">Gorros</option>
                      <option value="Accesorios">Accesorios</option>
                      
                    </select> </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="weight">Peso</label>
                    <div class="opciones">
                      <div class="form-multiple-column" data-columncount="3" role="group"  data-component="radio"><span class="from-radio">
                        <span class="dragger-item"> 
                      </span><input type="radio" class="form-radio"  value="Nuevo" /><label >Nuevo</label></span>
                      <span class="from-radio"><span class="dragger-item"></span><input type="radio" aria-describedby="label_5" class="form-radio" id="input_5_1" name="q5_productFreshness" value="Second Hand" /><label id="label_input_5_1" for="input_5_1">De segunda mano</label></span>
                      <span class="from-radio"><span class="dragger-item"></span><input type="radio" aria-describedby="label_5" class="form-radio" id="input_5_2" name="q5_productFreshness" value="Refurbished" /><label id="label_input_5_2" for="input_5_2">Usado</label></span></div>
                    </div>
                  </div>
                </div>
              </div>
        
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="guarantee">Garantía</label>
                    <input type="text" name="guarantee" class="form-control" placeholder="6 meses"/>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="others">Otros</label>
                    <input type="text" name="others" class="form-control" placeholder="Detalles adicionales"/>
                  </div>
                </div>
              </div>
        
              <button class="btn btn-primary" type="submit">
                Generar Publicacion
              </button>
            </form>
          </div>
            </body>

    </section>

        
        <footer>
            <br></br>
            <p class="direccion">Dirección: Av. Río Coca y Mariana de Jesús, atras del colegio Benalcazar</p>
            <p class="direccion">Pokey Enterprise © 2022. Derechos Reservados</p>
            <img  src={imagenes("./redes.png")} alt="Publicidad" width="232" />
            <br></br>
        </footer>

</div >

);

export default Vender;