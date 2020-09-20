// Usamos el paquete axios para HTTP
const axios = require('axios');

// Definimos la funcion con toda la logica de peticion GET
const getLugarLatLng = async(dir) => {

    // Hacemos el URL Encode del parametro direccion
    const encodedUrlDireccion = encodeURI(dir);

    // // Configuramos la peticion axios
    // const instance = axios.create({
    //     baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${ encodedUrlDireccion }&APPID=695fb63ae1775f0a158b49bd7b26d107`,
    //     //timeout: 1000,
    //     headers: { 'X-Custom-Header': 'foobar' }
    // });

    // // Hacemos peticion  GET a la API
    // const resp = await instance.get();

    let resp = null;
    try {
        resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ encodedUrlDireccion }&APPID=695fb63ae1775f0a158b49bd7b26d107`);

        if (resp.data.cod !== 200) {
            throw new Error(`No hay resultados para ${dir}`);
        }

        const data = resp.data;
        const direccion = data.name;
        const lat = data.coord.lat;
        const lng = data.coord.lon;

        return {
            direccion,
            lat,
            lng
        }
    } catch (err) {
        resp = err.response;
        return `No hay resultados para ${dir}, ${ resp.status}`;
    } finally {
        //console.log(resp); // Could be success or error
    }
};

// Exportamos la funcion
module.exports = {
    getLugarLatLng,
};