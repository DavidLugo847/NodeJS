const { Router } = require("express");
const express = require("express");
const ruta_admin = express.Router();
const contAdmin = require("../controller/controller_admin");




ruta_admin.get("/cerrarSesion", contAdmin.cerrarSesion);





module.exports = ruta_admin;