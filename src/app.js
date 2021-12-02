const express= require('express');
const app=express();
const routes=require('./routes/tiendaRoutes');
const databaseConnection=require('../config/database');
const path= require ('path');
const port=process.env.PORT || 4000;

/*Conección con MySQL */
databaseConnection.connect();

//Vamos a recibir información en formato JSON.
app.use(express.json());
//Vamos a recibir información en ese formato.
app.use(express.urlencoded({extended:false}));
/*Uso de EJS y archivos Públicos*/
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

//Todas las rutas quedan en otro archivo y las voy llamando.
app.use('',routes);
  
app.listen(port,()=>{
    console.log(`Server corriendo en puerto ${port}`) 
    //console.log('Server corriendo en puerto ${port}') 
});