import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import DateService from 'weather/services/date';
interface WeatherComponentArgs {
  weatherData: any;
}

export enum TemperatureFormat {
  CELSIUS = 'celsius',
  FAHRENHEIT = 'fahrenheit',
}

export default class Weather extends Component<WeatherComponentArgs> {
  @service declare date: DateService;
  /**
   * Current temperature format.
   * Defaults to Fahrenheit.
   */
  @tracked protected temperatureFormat: TemperatureFormat =
    TemperatureFormat.FAHRENHEIT;

  get sevenDayForecast(): any[] {
    return this.args.weatherData.daily.slice(1);
  }

  @action
  setTempFormat(format: TemperatureFormat): void {
    this.temperatureFormat = format;
  }
}
