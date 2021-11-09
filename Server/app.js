 let express = require('express'); // Primero importamos el modulo express
 let Servidor = express(); //Se crea la instancia
 let bodyparser = require('body-parser'); // Importamos el modulo para recibir parametros

 Servidor.use(bodyparser.urlencoded({ extended: false })); // Confuiguracio para recibir datos del formulario
 Servidor.use(bodyparser.json()); //Configuracion para recibir datos de tipo json





 Servidor.post("/sumar", (peticion, respuesta) => {

     let numero1 = parseInt(peticion.body.numero1);
     let numero2 = parseInt(peticion.body.numero2);
     var result = numero1 + numero2;

     respuesta.send("El resultado de la suma es: " + result + ".");
 });








 //  Servidor.post("/registrar", (peticion, respuesta) => {

 //      let user = peticion.body.User;
 //      let cl = peticion.body.Pass;


 //      respuesta.send("El usuario es: " + user + ". La contraseña es: " + cl + ".");
 //  });





 //  Servidor.post("/", (peticion, respuesta) => {
 //      respuesta.status(404);
 //      respuesta.send("Error al atender la peticion");
 //  }); // Error 404






 //  Servidor.get("/", (peticion, respuesta) => {
 //      respuesta.send("Hola a todos desde el server express: ✌😎");
 //  }); // Esta peticion es get y per mite solicitar informacion

 //  Servidor.post("/ADSI/Respuesta", (peticion, respuesta) => {
 //      respuesta.send("Esta es una peticion POST 📡");
 //  }); // Esta peticion es post y permite insertar informacion

 //  Servidor.put("/", (peticion, respuesta) => {
 //      respuesta.send("Esta es una peticion PUT ➕");
 //  }); //Esta peticion es put y permite actualizar

 //  Servidor.delete("/", (peticion, respuesta) => {
 //      respuesta.send("Esta es una peticion DELETE ❌");
 //  }); //Esta peticion es delete y permite borrar





 Servidor.listen(3000, () => {
     console.log("El servidor se esta ejecutando en el puerto 3000");
 })