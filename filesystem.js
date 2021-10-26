let fs = require('fs');
fs.writeFile('Miarchivo.txt', 'Hola mundo desde Node', error => {

    if (error) {
        console.log(error);
    } else {
        console.log('Archivo creado........!!!')
    }

});