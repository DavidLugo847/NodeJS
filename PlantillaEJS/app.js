let express = require('express');
let Servidor = express();
let bodyparser = require("body-parser");

Servidor.use(express.static(__dirname + '/public')); // Se configura la carpeta pública

Servidor.use(bodyparser.json());
Servidor.use(bodyparser.urlencoded({ extended: false }));

Servidor.set('view engine', 'ejs');
Servidor.set('views', __dirname + '/views');


Servidor.get('/', (req, resp) => {



    let json = [

        { "Paso": "Crear el archivo principal" },
        { "Paso": "Crear el package.js" },
        { "Paso": "Instalar las dependencias" },
        { "Paso": "Configurar el servidor express" },
        { "Paso": "Configurar nodemon" },
    ];
    resp.render("index.ejs", { "titulo": "Ejemplo de EJS", "nombre": "DavidLugo", "datos": json });

});

Servidor.post("/sumar", (req, resp) => {
    var n1 = parseInt(req.body.numero1);
    var n2 = parseInt(req.body.numero2);

    var res = n1 + n2;

    resp.send("La suma es: " + res + ".");

});






Servidor.listen(3000, () => {
    console.log('Servidor 3000 activo');
});