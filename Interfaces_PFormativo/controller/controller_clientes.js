let controlador = {};

controlador.renderizarCliente = (req, resp) => {
    resp.render("clientes.ejs");
};
controlador.registrarCliente = (req, resp) => {
    resp.send("Aqui va el form de registro de clientes");
};
controlador.actualizarCliente = (req, resp) => {
    resp.send("Aqui se actualiza un cliente");
};
controlador.eliminarCliente = (req, resp) => {
    resp.send("Aqui se elimina un cliente");
};
controlador.buscarCliente = (req, resp) => {
    resp.send("Aqui se busca un cliente");
};




module.exports = controlador;