let express = require("express");
let Servidor = express();
let bodyparser = require("body-parser");


Servidor.use(express.static(__dirname + "/public"));
Servidor.use(bodyparser.json());
Servidor.use(bodyparser.urlencoded({ extended: false }));
Servidor.set("view engine", "ejs");
Servidor.set("views", __dirname + "/views")

Servidor.use(require("./routes/routes_index"));
Servidor.use(require("./routes/route_clientes"));
Servidor.use(require("./routes/route_productos"));





Servidor.listen(3000, () => {
    console.log("Server 3000 activo.");
});