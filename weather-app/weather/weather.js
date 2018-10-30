const request = require('request');

const getWeather = (geocode, callback) => {
  const url = `https://api.darksky.net/forecast/10a252d1bbf7433287074f83f5dab4e0/${geocode.lat},${geocode.lng}`

  request({
    url,
    json: true,
  }, (err, resp, body) => {
    if  (!err && resp.statusCode === 200) {
      callback(undefined, {
        currentTemp: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      if (err) {
        callback('Unable to connection to weather API');
      }
      callback(body);
    }
  });
};

module.exports = {
  getWeather,
};

