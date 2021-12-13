const { Router } = require("express");
const express = require("express");
const ruta_home = express.Router();
const contHome = require("../controller/controller_home");




ruta_home.get("/verProductos", contHome.verProductos);
ruta_home.get("/comprar", contHome.comprar);





module.exports = ruta_home;