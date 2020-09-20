// Impostamos la libreria propia lugar.js
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// definimos el yargs
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// Funcion que devuelve la info de temperatura de un lugar usando APIs
const getInfo = async(direccion) => {
    try {
        // Ejecutamos la funcion getLugarLatLng para obtener las cooerdenadas
        const coords = await lugar.getLugarLatLng(direccion); // es una promise, porque async siempre devuelve una promesa
        // Ejecutamos la funcion getClimaLatLng
        const temp = await clima.getClimaLatLng(coords.lat, coords.lng); // es una promise, porque async siempre devuelve una promesa
        // Todo ha ido bien, retornamos el resultado
        return `El clima de ${ coords.direccion } es ${ temp }.`;
    } catch {
        // Ha habido algún error
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}

// Ejecutamos la funcion
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);