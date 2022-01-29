import Component from '@glimmer/component';
import TemperatureFormatService, {
  TemperatureFormat,
} from 'weather/services/temperature';
import { fahrenheitToCelsius } from 'weather/system/util';
import { inject as service } from '@ember/service';

interface CurrentWeatherArgs {
  currentWeather: any;
  temperatureFormat: TemperatureFormat;
}

export default class CurrentWeather extends Component<CurrentWeatherArgs> {
  @service declare temperature: TemperatureFormatService;

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
    if (this.temperature.format === TemperatureFormat.FAHRENHEIT) {
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
