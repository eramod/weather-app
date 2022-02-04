import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import TemperatureFormatService, {
  TemperatureFormat,
} from 'weather/services/temperature';
import { fahrenheitToCelsius } from 'weather/system/util';
import { CurrentWeatherData } from 'weather-data';
import { assert } from '@ember/debug';

interface CurrentWeatherArgs {
  currentWeather: CurrentWeatherData;
  temperatureFormat: TemperatureFormat;
}

export default class CurrentWeather extends Component<CurrentWeatherArgs> {
  @service declare temperature: TemperatureFormatService;

  /**
   * Returns the current weather description.
   */
  get currentWeatherDescription(): CurrentWeatherData['weather'][0]['main'] {
    let weather = this.args.currentWeather.weather[0];
    assert('Weather object must exist', weather !== undefined);

    return weather.main;
  }

  /**
   * Returns the current temperature in fahrenheit.
   */
  get currentTemp(): number {
    let temp = this.args.currentWeather.temp;
    if (this.temperature.format === TemperatureFormat.FAHRENHEIT) {
      return Math.round(temp);
    } else {
      return Math.round(fahrenheitToCelsius(temp));
    }
  }

  get currentWeatherIconUrl(): CurrentWeatherData['weather'][0]['icon'] {
    const weather = this.args.currentWeather.weather[0];
    assert('Weather object must exist', weather !== undefined);

    return `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  }
}
