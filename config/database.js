const mysql= require('mysql2');

//PARA CONECTAR A LA BASE DE DATOS DE MYSQL
/*const databaseConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'tiendaMuebles',
});*/

//PARA CONECTAR A LA BASE DE DATOS DE CLEVER CLOUD
const databaseConnection=mysql.createConnection({
    host:'bx3x7kltrur2ibrexxs9-mysql.services.clever-cloud.com',
    user:'u9hgfdbrijlynmls',
    database:'bx3x7kltrur2ibrexxs9',
    password:'PKjz08MUVIDMDe94eAzn'
});


databaseConnection.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Servidor conectado a MySQL")
    }
});

module.exports=databaseConnection;