const databaseConnection=require('../../config/database');

const renderHome = (req,res)=>{
    //Conectando a la BD, solicitando info.
    const sql="SELECT * FROM categorias"
        databaseConnection.query(sql,(error,data)=>{
            if(error){
                console.log(error)
            }else{
                res.render('./pages/index',{data
                })
            }
        })
        /*Envíe esa info al index.js
        res.render('./pages/index')
        console.log(data)*/
    }

const getAllProducts = (req,res)=>{
    const Productos="SELECT * FROM productos"
    databaseConnection.query(Productos,(error,data)=>{
            if(error){
                console.log(error)
            }else{
                res.render('pages/Productos',{data})            
            }        
    })
};

const getForm = (req,res)=>{
    res.render('pages/Formulario');
};

const addNewProducto = (req,res)=>{
    const sqlInsert = 'INSERT INTO productos (producto,categoria,imagen, descripcion,precio) VALUES (?,?,"/imagenes/estilo-madera.png",?,?)';
    
    const{producto,categoria,descripcion,precio}=req.body;
    if(parseInt(precio)!=NaN){
        req.body.precio =0;
    };

    databaseConnection.query(sqlInsert,[producto,categoria,descripcion,precio],(error,data)=>{
        if(error){
            console.log(error);
        }else{
            console.log("Agrego datos")
        }
    });
    console.log(req.body);
    res.redirect('/Productos');//Redirecciona a esa página Tienda Productos
};

module.exports= {   renderHome,
                    getAllProducts,
                    getForm,
                    addNewProducto,
};