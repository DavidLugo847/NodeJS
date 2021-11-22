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
    let a = parseFloat(req.body.estatura);

    let res = p / (a * a);
    if (res < 18.5) {
        resp.send("Hola " + nomb + ".<br> Su indice de masa corporal es: " + res + ". <br><br> Estas por debajo del peso.");

    } else if (res >= 18.5 && res < 24.9) {
        resp.send("Hola " + nomb + ".<br> Su indice de masa corporal es: " + res + ". <br><br>Estas Saludable😎");

    } else if (res >= 25.0 && res < 29.9) {
        resp.send("Hola " + nomb + ".<br> Su indice de masa corporal es: " + res + ". <br><br>Tienes Sobrepeso😐");
    } else if (res >= 30.0 && res < 39.9) {
        resp.send("Hola " + nomb + ".<br> Su indice de masa corporal es: " + res + ". <br><br>Tienes Obesidad☹");

    } else if (res >= 40) {
        resp.send("Hola " + nomb + ".<br> Su indice de masa corporal es: " + res + ". <br>Tienes Obesidad Morbida😖");

    } else {
        resp.send("Por favor introduce un dato válido.");

    }
});




Servidor.listen(2000, () => {
    console.log("Server activo 2000");
});