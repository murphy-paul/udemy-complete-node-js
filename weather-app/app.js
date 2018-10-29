const request = require('request');
const yargs = require('yargs');
const API_KEY = process.env.API_KEY;

const argv = yargs
    .option({
      a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
      }
    })
    .help()
    .argv;

const address = encodeURIComponent(argv.address);

const settings = {
  api_key: process.env.API_KEY,
  url: `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.API_KEY}&address=${address}`
};



request({
  url: settings.url,
  json: true
}, (error, resp, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Lat: ${body.results[0].geometry.location.lat}`)
  console.log(`Long: ${body.results[0].geometry.location.lng}`)
});
