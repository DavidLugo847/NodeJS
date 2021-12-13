let controlador = {};

controlador.cerrarSesion = (req, resp) => {
    resp.render("index.ejs");
};
controlador.verProductos = (req, resp) => {
    resp.render("listado_productos.ejs");
};
controlador.comprar = (req, resp) => {
    resp.render("ventas.ejs");
};


module.exports = controlador;