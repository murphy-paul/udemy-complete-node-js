const request = require('request');

const getWeather = (geocode) => {
  const url = `https://api.darksky.net/forecast/10a252d1bbf7433287074f83f5dab4e0/${geocode.lat}${geocode.lng}`

  request({
    url,
    json: true,
  }, (err, resp, body) => {
    if  (!err && resp.statusCode === 200) {
      console.log(`Temp: ${body.currently.temperature}`);
    } else {
      if (err) {
        console.log('Unable to connection to weather API');
      }
      console.log(body);
    }
  });
};

module.exports = {
  getWeather,
};

