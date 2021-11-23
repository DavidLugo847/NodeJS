let controlador = {};


controlador.renderizarIndex = (req, resp) => {
    resp.render("index.ejs");
};
controlador.validarUsuario = (req, resp) => {
    // Aqui se validan los usuarios

    var login = req.body.login;
    var password = req.body.password;

    if (login == "david" && password == 123) {
        resp.render("home.ejs", { "usuario": login });
    } else {
        resp.send("<h1>Usuario no autorizado</h1>")
    }
};

controlador.regresarHome = (req, resp) => {
    resp.render("home.ejs", { "usuario": "" });
};



module.exports = controlador;