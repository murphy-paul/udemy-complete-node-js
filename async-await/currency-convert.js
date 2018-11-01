const axios = require('axios');
/**
 * 
 * @param {string} from currency code you want to convert from
 * @param {string} to currency code you want to convert from
 * @param {number} amount you have to convery 
 */
const convert = (from, to, amount) => {
  return 22.1
}

//fixer.io
// 941933897aa8eb0d4f2c08a62e7c780a
// http://data.fixer.io/api/latest\?access_key\=941933897aa8eb0d4f2c08a62e7c780a

const api_key = process.env.FIXER_API_KEY;
const url = `http://data.fixer.io/api/latest?access_key=${api_key}`;

// Using promises
// const getExchangeRate = (from, to) => {
//   return axios.get(url).then(res => {
//     const euro = 1 / res.data.rates[from];
//     const rate = euro * res.data.rates[to]; 
//     return rate;
//   })
// };

const getExchangeRate = async (from, to) => {
  const response = await axios.get(url);
  const euro = 1 / response.data.rates[from];
  const rate = euro * response.data.rates[to]; 
  return rate;
};


const getCountries = async (currencyCode) => {
  const url = `https://restcountries.eu/rest/v2/currency/${currencyCode}`
  const response = await axios.get(url);
  
  return response.data.map(country => country.name);
};


getCountries("EUR")
  .then(d => console.log(d))
  .catch(err => console.log(err));

// getExchangeRate('USD', 'CAD').then(rate => {
//   console.log(rate);
// }).catch(err => {
//   console.log(err);
// });