let controlador = {};


controlador.registrarProducto = (req, resp) => {
    resp.send("Aqui va el form de registro de producto");
};
controlador.actualizarProducto = (req, resp) => {
    resp.send("Aqui se actualiza un producto");
};
controlador.eliminarProducto = (req, resp) => {
    resp.send("Aqui se elimina un producto");
};
controlador.buscarProducto = (req, resp) => {
    resp.send("Aqui se busca un producto");
};

controlador.listarProducto = (req, resp) => {
    resp.render("listado_productos.ejs");
};




module.exports = controlador;