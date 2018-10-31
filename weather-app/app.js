const yargs = require('yargs');
const geocode = require('./geocode/geocode-promise');
const weather = require('./weather/weather-promise');

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

console.log(argv);

geocode.geocodeAddress(argv.address)
  .then(geocode => weather.getWeather(geocode))
  .then(weather => console.log(weather))
  .catch(err => console.log(`Error: ${err}`));
