const axios = require('axios');

const api_key = process.env.FIXER_API_KEY;
const url = `http://data.fixer.io/api/latest?access_key=${api_key}`;

/**
 * Retrieves the exchange rate between from country code and to country code.
 * 
 * @param {string} from currency code
 * @param {string} to currency code
 * @returns {number} the exchange rate.
 */
const getExchangeRate = async (from, to) => {
  try {
    const response = await axios.get(url);
    const euro = 1 / response.data.rates[from];
    const rate = euro * response.data.rates[to]; 

    if (isNaN(rate)) {
      throw new Error();
    }

    return rate;  
  } catch (e) {
    throw new Error(`Unable to get exchange rate for ${from} and ${to}`);
  }
};

/**
 * Retrieves a list of countries where the currency is accepted.
 * 
 * @param {string} currencyCode 
 * @return {array} of countries where current is accepted.
 */
const getCountries = async (currencyCode) => {
  try {
    const url = `https://restcountries.eu/rest/v2/currency/${currencyCode}`
    const response = await axios.get(url);    

    return response.data.map(country => country.name);
  } catch (e) {
    throw new Error(`Unable to get countries that use ${currencyCode}.`);
  }
};

/**
 * Converts the amount between the from country and the to country and displays countries
 * where the to currrency is accepted.
 * 
 * @param {string} from currency code you want to convert from
 * @param {string} to currency code you want to convert from
 * @param {number} amount you have to convery 
 */
const convert = async(from, to, amount) => {
  const convertedAmount = await getExchangeRate(from, to).then(rate => (amount * rate).toFixed(2));
  const countries = await getCountries(to);

  return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend it in the following countries: ${countries}`;
}

convert('USD', 'CAD', 20)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// const add = async (a, b) => a + b + c;

// const doWork = async () => {
//   try  {
//     const result = await add(12, 13);
//     return result;
//   } catch (e) {
//     return -1;
//   }
// };

// doWork().then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(`Something went wrong!`);
// });