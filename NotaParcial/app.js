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


Servidor.post("/CParcial", (req, resp) => {
    let n1 = parseInt(req.body.nota1);
    let n2 = parseInt(req.body.nota2);
    let n3 = parseInt(req.body.nota3);

    let res = (n1 * 0.35) + (n2 * 0.35) + (n3 * 0.30);
    if (res <= 3) {
        resp.send("Su calificacion es: " + res + ". \n Haz reprobado la materia.");
    } else {
        resp.send("Su calificacion es: " + res + ". \n Haz aprobado la materia.");
    }
});




Servidor.listen(2000, () => {
    console.log("Server activo 2000");
});