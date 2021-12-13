const res = require("express/lib/response");

let controlador = {};


controlador.renderizarIndex = (req, resp) => {
    resp.render("index.ejs");
};
controlador.validarUsuario = (req, resp) => {
    // Aqui se validan los usuarios

    var login = req.body.login;
    var password = req.body.password;

    if (login == "david" && password == 123) {
        resp.render("home.ejs", { "usuario": "" });
    } else if (login == "admin" && password == "admin") {
        resp.render("homeAdmin.ejs", { "usuario": "" });
    } else {

    }
};

controlador.regresarHome = (req, resp) => {
    resp.render("home.ejs", { "usuario": "" });
};



module.exports = controlador;