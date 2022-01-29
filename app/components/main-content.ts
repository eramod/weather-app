import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import DateService from 'weather/services/date';
import TemperatureService, {
  TemperatureFormat,
} from 'weather/services/temperature';
interface WeatherComponentArgs {
  weatherData: any;
}

export default class Weather extends Component<WeatherComponentArgs> {
  @service declare date: DateService;
  @service declare temperature: TemperatureService;

  get sevenDayForecast(): any[] {
    return this.args.weatherData.daily.slice(1);
  }

  @action
  setTempFormat(format: TemperatureFormat): void {
    this.temperature.format = format;
  }
}
