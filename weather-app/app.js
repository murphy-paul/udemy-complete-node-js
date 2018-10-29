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


const displayAddress = (data) => {
  console.log(`Address: ${data.formatted_address}`);
  console.log(`Lat: ${data.geometry.location.lat}`)
  console.log(`Long: ${data.geometry.location.lng}`)

}


request({
  url: settings.url,
  json: true
}, (error, resp, body) => {
  if (error) {
    console.log('Unable to connect to geocode api');
  } else if (body.status === 'ZERO_RESULTS') {
    console.log(`No results for address [${address}]`);
  } else if (body.status === 'OK') {
    displayAddress(body.results[0]);
  } else {
    console.log('Unhandled response');
  }
});
