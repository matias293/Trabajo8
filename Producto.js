import { v4 as uuidv4 } from 'uuid';

let productos = [
    {
            title: 'Computadora',
            price: 234,
            thumbail: 'URL',
            id: uuidv4()
    },
    {
            title: 'Notebook',
            price: 324,
            thumbail: 'URL',
            id: uuidv4()
    },
    {
            title: 'Playstation',
            price: 221,
            thumbail: 'URL',
            id: uuidv4()
    }
 ]


export class Producto {
    

    leerProductos= ()=> {
        if(productos.length === 0) return []
        return productos
    }

    leerProductosPorId = (id) => {
        const producto =  productos.find(product => product.id === id)
        console.log(producto)
        return producto
    }

    guardarProducto = (title,price,thumbnail) =>{
        let obj= {
            title:'Nuevo Producto',
            price:123,
            thumbnail:'URL',
            id : uuidv4()
          }
        
        productos.push(obj)
        return obj
        
    }




}