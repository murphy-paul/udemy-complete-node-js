const axios = require('axios');

const getWeather = (geocode, callback) => {
  const url = `https://api.darksky.net/forecast/10a252d1bbf7433287074f83f5dab4e0/${geocode.lat},${geocode.lng}`

  return axios.get(url)
    .then(resp => {
      if  (resp.status === 200) {
        return {
          currentTemp: resp.data.currently.temperature,
          apparentTemperature: resp.data.currently.apparentTemperature
        }
      } else {
        throw new Error('Error getting weather data');
      }

    }).catch(err => {
      throw new Error('Unable to connection to weather API');
    });
};

module.exports = {
  getWeather,
};

