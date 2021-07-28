import express from 'express';

import {Producto} from './Producto.js'

const app = express();
const puerto = 8080;
const miProducto = new Producto()

const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

server.on('error', (err) => {
  console.log('Error en el servidor', err);
});



app.get('/api/productos/listar', (req, res) => {
   const productos = miProducto.leerProductos()
    res.json({
      productos
    });
  });



  app.get('/api/productos/listar/:id', (req, res) => {
      const {id} = req.params
      const producto = miProducto.leerProductosPorId(id)
      if(!producto){
          res.json({
              error:'Producto no encontrado'
          })
      }

    res.json({
      producto
    });
  });


  app.post('/api/productos/guardar', (req, res) => {
     
     
    const productoGuardado = miProducto.guardarProducto()

    res.json({
      productoGuardado
    }); 
  });


  

