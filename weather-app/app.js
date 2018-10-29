const request = require('request');
const API_KEY = process.env.API_KEY;

const settings = {
  api_key: process.env.API_KEY,
  url: `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.API_KEY}&address=277%20elm%20park%20clonmel%20ireland`
};



request({
  url: settings.url,
  json: true
}, (error, resp, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Lat: ${body.results[0].geometry.location.lat}`)
  console.log(`Long: ${body.results[0].geometry.location.lng}`)
});
