const express = require("express");
const ruta_index = express.Router();
const contIndex = require("../controller/controller_index");




ruta_index.get("/", contIndex.renderizarIndex);
ruta_index.post("/validarUsuario", contIndex.validarUsuario);
ruta_index.get("/regresarHome", contIndex.regresarHome);




module.exports = ruta_index;