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


Servidor.post("/calcular", (req, resp) => {
    let base = parseInt(req.body.base);
    let alt = parseInt(req.body.altura);
    let res = (base * alt) / 2;

    resp.send("El area del triangulo es: " + res + ".");
});




Servidor.listen(4000, () => {
    console.log("Server activo 4000");
});