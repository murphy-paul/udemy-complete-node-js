const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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

geocode.geocodeAddress(argv.address, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// its async dummy
// if (geocodeAddress) {
//   console.log(`Got an address: ${JSON.stringify(geocodeAddress)}`);
// } else {
//   console.log('oops');
// }