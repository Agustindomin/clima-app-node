// Usamos el paquete axios para HTTP
const axios = require('axios');

// Definimos la funcion con toda la logica de peticion GET
const getClimaLatLng = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=695fb63ae1775f0a158b49bd7b26d107&units=metric`);

    return resp.data.main.temp;

};

// Exportamos la funcion
module.exports = {
    getClimaLatLng,
};