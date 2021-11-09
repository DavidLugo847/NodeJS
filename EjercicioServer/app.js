let express = require('express');
let Server = express();
let bodyparser = require('body-parser');
Server.use(bodyparser.urlencoded({ extended: false }));
Server.use(bodyparser.json());









Server.post("/imc", (peticion, respuesta) => {

    let name = peticion.body.nombre;
    let kg = parseInt(peticion.body.peso);
    let height = parseFloat(peticion.body.estatura);

    let imc = kg / (height * height);
    if (imc < 18.5) {
        respuesta.send("Hola " + name + " su IMC es: " + imc + ".\n" + "Estas por debajo del peso ☹.");
    } else {
        if (imc >= 18.5 && imc <= 24.9) {
            respuesta.send("Hola " + name + " su IMC es: " + imc + ".\n" + "Estas Saludable 😎.");
        } else {
            if (imc >= 25.0 && imc <= 29.9) {
                respuesta.send("Hola " + name + " su IMC es: " + imc + ".\n" + "Estas con sobrepeso 😤.");
            } else {
                if (imc >= 30.0 && imc < 39.9) {
                    respuesta.send("Hola " + name + " su IMC es: " + imc + ".\n" + "Tienes obesidad 🤒.");
                } else {
                    if (imc >= 40.0) {
                        respuesta.send("Hola " + name + " su IMC es: " + imc + ".\n" + "Tienes obesidad morbida 😵.");
                    } else {
                        respuesta.send("Por favor ingresa un dato valido.")
                    }
                }
            }
        }
    }


});





Server.listen(4000, () => {
    console.log("Servidor 4000 activo")
});