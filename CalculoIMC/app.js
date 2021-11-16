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
    let nomb = parseInt(req.body.nombre);
    let p = parseInt(req.body.peso);
    let a = parseInt(req.body.altura);

    let res = p / (a * a);
    resp.send("Hola " + nombre + ".<br> Su indice de masa corporal es: " + res + ". <br>")

});




Servidor.listen(2000, () => {
    console.log("Server activo 3000");
});