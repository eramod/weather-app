import Route from '@ember/routing/route';

export default class Weather extends Route {
  async model() {
    // Docs for this API call: https://openweathermap.org/api/one-call-api#data
    return await fetch(
      'https://api.openweathermap.org/data/2.5/onecall?lat=45.554334820583186&lon=-122.67038653426538&appid=64406de99eb08f428a3c8a63d2651e92&units=imperial'
    ).then((response) => response.json());
  }
}
