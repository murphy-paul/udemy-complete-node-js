const request = require('request');
const API_KEY = process.env.API_KEY;

/**
 * Attempts to find a geocode for the given address.
 * 
 * @param {sting} address for geocode lookup
 * @returns {{formatted_address: string, lat: number, lng: number}} if lookup is successful
 */
const geocodeAddress = (address, callback) => {

  const encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=${API_KEY}&address=${encodedAddress}`,
    json: true
  }, (error, resp, body) => {
    if (error) {
      callback('Unable to connect to geocode api');
    } else if (body.status === 'ZERO_RESULTS') {
      callback(`No results for address [${address}]`);
    } else if (body.status === 'OK') {
      // displayAddress(body.results[0]);
      callback(undefined, formatGeocode(body.results[0]));
    } else {
      callback('Unhandled response');
    }
  });
  
};

const formatGeocode = (data) => {
  return {
    formatted_address: data.formatted_address,
    lat: data.geometry.location.lat,
    lng: data.geometry.location.lng
  };
}

const displayAddress = (data) => {
  console.log(`Address: ${data.formatted_address}`);
  console.log(`Lat: ${data.geometry.location.lat}`)
  console.log(`Long: ${data.geometry.location.lng}`)
  console.log(`Long: ${typeof data.geometry.location.lng}`)
}

module.exports = {
  geocodeAddress,
};