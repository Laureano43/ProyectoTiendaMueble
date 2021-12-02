const { application } = require('express');
const express=require('express');


const routes=express.Router();/*permite hacer el ruteo, el recorrido que tiene que hacer al recibir una petición*/

const {renderHome,getAllProducts,getForm,addNewProducto}=require('../controllers/tiendaControllers')

        routes.get('/',renderHome);
        routes.get('/productos',getAllProducts);
        routes.get('/nuevoProducto', getForm);
        routes.post('/nuevoProducto',addNewProducto);


module.exports= routes;