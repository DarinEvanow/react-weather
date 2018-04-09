const baseURL = 'http://api.openweathermap.org/data/2.5/';
const apiKey = '52efe9cd0ae31d650edd912578ba8b97';

function prepRouteParams (queryStringData) {
  return Object.keys(queryStringData)
    .map((key) => `${key}=${encodeURIComponent(queryStringData[key])}`)
    .join('&');
}

function getQueryStringData (city) {
  return {
    q: city,
    type: 'accurate',
    APPID: apiKey,
    cnt: 5,
  }
}

function prepUrl (type, queryStringData) {
  return baseURL + type + '?' + prepRouteParams(queryStringData);
}

function handleError (error) {
  console.error(error);
  return null;
}

export async function getCurrentWeather (city) {
  let queryStringData = getQueryStringData(city);
  let url = prepUrl('weather', queryStringData);

  const response = await fetch(url)
    .catch(handleError);

  const weatherJSON = await response.json();
  return weatherJSON;
}

export async function getForecast (city) {
  let queryStringData = getQueryStringData(city);
  let url = prepUrl('forecast/daily', queryStringData);

  const response = await fetch(url)
    .catch(handleError);

  const forecastJSON = await response.json();
  return forecastJSON;
}
