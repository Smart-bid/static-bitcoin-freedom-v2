const getCountry = (currentCountry) => {
    const allCountry = require('./countries.json');
    let selectCountry = allCountry.find(country => country.hasOwnProperty('ISO 3166-1 2 Letter Code') && country['ISO 3166-1 2 Letter Code'] === currentCountry);
    return selectCountry["Common Name"];
}
export default getCountry