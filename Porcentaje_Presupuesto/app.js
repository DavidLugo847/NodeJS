let express = require("express");
let Servidor = express();

let bodyparser = require("body-parser");

Servidor.use(express.static(__dirname + "/public"));
Servidor.use(bodyparser.json());
Servidor.use(bodyparser.urlencoded({ extended: false }));

Servidor.set("view engine", "ejs");
Servidor.set("views", __dirname + "/views");

Servidor.get("/", (req, resp) => {
    resp.render("index.ejs");
});


Servidor.post("/porcentaje", (req, resp) => {

    let presup = parseInt(req.body.presupuesto);
    let pGinecologia = presup * 0.4;
    let pTraumatologia = presup * 0.3;
    let pPediatria = presup * 0.3;

    resp.send("<h1>Resultados<h1><br><table border='1'><th>Area</th><th>Porcentaje</th><th>Dinero Correspondiente</th><tbody><tr><td>Ginecología</td><td>40%</td><td>$" + pGinecologia + "</td></tr><tr><td>Traumatología</td><td>30%</td><td>$" + pTraumatologia + "</td></tr><tr><td>Pediatría</td><td>30%</td><td>$" + pPediatria + "</td></tr></tbody></table>");

});




Servidor.listen(5000, () => {
    console.log("Servidor 5000 activo");
});