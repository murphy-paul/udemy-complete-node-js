const axios = require('axios');
const API_KEY = process.env.API_KEY;

/**
 * Attempts to find a geocode for the given address.
 * 
 * @param {sting} address for geocode lookup
 * @returns {{formatted_address: string, lat: number, lng: number}} if lookup is successful
 */
const geocodeAddress = (address, callback) => {

  const encodedAddress = encodeURIComponent(address);

  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${API_KEY}&address=${encodedAddress}`)
    .then(response => {
      if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address')
      }
      return formatGeocode(response.data.results[0]);
   }).catch(err => {
     throw new Error(`Unable to lookup geocode for address ${address}`)
   })
};

const formatGeocode = (data) => {
  return {
    formatted_address: data.formatted_address,
    lat: data.geometry.location.lat,
    lng: data.geometry.location.lng
  };
}

module.exports = {
  geocodeAddress,
};