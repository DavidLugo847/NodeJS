const { Router } = require("express");
const express = require("express");
const ruta_cliente = express.Router();
const contCliente = require("../controller/controller_clientes");




ruta_cliente.get("/registrarCliente", contCliente.registrarCliente);
ruta_cliente.get("/actualizarCliente", contCliente.actualizarCliente);
ruta_cliente.get("/eliminarCliente", contCliente.eliminarCliente);
ruta_cliente.get("/buscarCliente", contCliente.buscarCliente);




module.exports = ruta_cliente;