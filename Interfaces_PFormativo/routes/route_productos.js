const { Router } = require("express");
const express = require("express");
const ruta_productos = express.Router();
const contProductos = require("../controller/controller_productos");




ruta_productos.get("/registrarProducto", contProductos.registrarProducto);
ruta_productos.get("/actualizarProducto", contProductos.actualizarProducto);
ruta_productos.get("/eliminarProducto", contProductos.eliminarProducto);
ruta_productos.get("/buscarProducto", contProductos.buscarProducto);
ruta_productos.get("/listarProductos", contProductos.listarProducto);




module.exports = ruta_productos;