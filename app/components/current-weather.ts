import Component from '@glimmer/component';
import { TemperatureFormat } from 'weather/components/main-content';
import { fahrenheitToCelsius } from 'weather/system/util';

interface CurrentWeatherArgs {
  currentWeather: any;
  temperatureFormat: TemperatureFormat;
}

export default class CurrentWeather extends Component<CurrentWeatherArgs> {
  /**
   * Returns the current weather description.
   */
  get currentWeatherDescription(): string {
    return this.args.currentWeather.weather[0].main;
  }

  /**
   * Returns the current temperature in fahrenheit.
   */
  get currentTemp(): number {
    let temp = this.args.currentWeather.temp;

    if (this.args.temperatureFormat === TemperatureFormat.FAHRENHEIT) {
      return Math.round(temp);
    } else {
      return Math.round(fahrenheitToCelsius(temp));
    }
  }

  get currentWeatherIconUrl(): string {
    const icon = this.args.currentWeather.weather[0].icon;
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }
}
