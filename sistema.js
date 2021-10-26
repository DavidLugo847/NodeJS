let os = require('os');
let fs = require('fs');
const { text } = require('stream/consumers');
let texto = 'Informacion del Sistema\n \n';
texto += numVersion();
texto += '+------------------------------------------------------------+\n';
texto += versionSistema();
texto += '+------------------------------------------------------------+\n';
texto += plataforma();
texto += '+------------------------------------------------------------+\n';
texto += tipoSistema();
texto += '+------------------------------------------------------------+\n';
texto += host();
texto += '+------------------------------------------------------------+\n';
texto += capacidadMemoria();
texto += '+------------------------------------------------------------+\n';
texto += memoriaLibre();
texto += '+------------------------------------------------------------+\n';
texto += tiempoUso();
texto += '+------------------------------------------------------------+\n';
texto += cpu();
texto += '+------------------------------------------------------------+\n';
texto += cache();
texto += '+------------------------------------------------------------+\n';





fs.writeFile('Sistema.txt', texto, function(error) {
    if (error) {

    } else {
        console.log('El archivo fue creado de manera exitosa....!!!')
    }
});


function versionSistema() {
    let version = 'Version del Sistema: ' + os.release() + '\n';
    return version;
}

function numVersion() {
    let numversion = 'SO: ' + os.version() + '\n';
    return numversion;
}

function capacidadMemoria() {
    let capmemoria = 'Capacidad de la memoria: ' + os.totalmem() / 1000000000 + 'GB\n';
    return capmemoria;
}

function memoriaLibre() {
    let freememory = 'Memoria libre: ' + os.freemem() / 1000000000 + 'GB\n';
    return freememory;
}

function plataforma() {
    let plat = 'Plataforma: ' + os.platform() + '\n';
    return plat;
}

function tipoSistema() {
    let tiposys = 'Tipo de Sistema: ' + os.type() + '\n';
    return tiposys;
}

function tiempoUso() {
    let time = 'Tiempo de Uso: ' + os.uptime() / 360000 + ' Horas\n';
    return time;
}

function cpu() {
    let core = 'CPU: ' + os.cpus()[0].model + '\n';
    return core;
}

function cache() {
    let temp = 'Cache Dir: ' + os.tmpdir + '\n';
    return temp;
}

function host() {
    let hostn = 'User Name: ' + os.hostname() + '\n';
    return hostn;
}