import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import DateService from 'weather/services/date';
import TemperatureService, {
  TemperatureFormat,
} from 'weather/services/temperature';
import { fahrenheitToCelsius } from 'weather/system/util';

interface DailyForecastComponentArgs {
  dailyForecast: any; // FIXME: Add type
  temperatureFormat: TemperatureFormat;
}

export default class DailyForecast extends Component<DailyForecastComponentArgs> {
  @service declare date: DateService;
  @service declare temperature: TemperatureService;

  get iconUrl(): string {
    const icon = this.args.dailyForecast.weather[0].icon;
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  get timestamp(): string {
    return this.args.dailyForecast.dt;
  }

  get day(): string {
    return this.date.getDay(this.timestamp);
  }

  get dateOfMonth(): number {
    let date = new Date(parseInt(this.timestamp) * 1000);
    return date.getDate();
  }

  get maxTemp(): number {
    let temp = this.args.dailyForecast.temp.max;

    if (this.temperature.format === TemperatureFormat.FAHRENHEIT) {
      return Math.round(temp);
    } else {
      return Math.round(fahrenheitToCelsius(temp));
    }
  }

  get minTemp(): number {
    let temp = this.args.dailyForecast.temp.min;

    if (this.args.temperatureFormat === TemperatureFormat.FAHRENHEIT) {
      return Math.round(temp);
    } else {
      return Math.round(fahrenheitToCelsius(temp));
    }
  }
}
