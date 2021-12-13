let controlador = {};

controlador.cerrarSesion = (req, resp) => {
    resp.render("index.ejs");
};

module.exports = controlador;