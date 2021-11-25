let express = require("express");
let Servidor = express();
let bodyparser = require("body-parser");


Servidor.use(express.static(__dirname + "/public"));
Servidor.use(bodyparser.json());
Servidor.use(bodyparser.urlencoded({ extended: false }));

Servidor.set("view engine", "ejs");
Servidor.set("views", __dirname + "/views")

Servidor.get("/", (req, resp) => {
    resp.render("index.ejs");
});


Servidor.post("/CIMC", (req, resp) => {
    let nomb = req.body.nombre;
    let p = parseInt(req.body.peso);
    let a = parseFloat(req.body.altura);
    let res = p / (a * a);
    let resInt = res.toFixed(2);

    if (res < 18.5) {
        resp.send("Hola " + nomb + ".<br> Su indice de masa corporal es: " + resInt + ". <br>Estas por debajo del peso normal.");
    } else if (res >= 18.5 && res < 24.9) {
        resp.send("Hola " + nomb + ".<br> Su indice de masa corporal es: " + resInt + ". <br>Estas Saludable.");

    } else if (res >= 25.0 && res < 29.9) {
        resp.send("Hola " + nomb + ".<br> Su indice de masa corporal es: " + resInt + ". <br>Tienes sobrepeso.");

    } else if (res >= 30.0 && res < 39.9) {
        resp.send("Hola " + nomb + ".<br> Su indice de masa corporal es: " + resInt + ". <br>Tienes Obesidad.");

    } else if (res > 40) {
        resp.send("Hola " + nomb + ".<br> Su indice de masa corporal es: " + resInt + ". <br>Tienes Obesidad Morbida.");

    } else {
        resp.send("Por favor ingresa un dato valido.")
    }
});




Servidor.listen(3000, () => {
    console.log("Server activo 3000");
});