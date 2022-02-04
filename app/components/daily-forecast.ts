import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { inject as service } from '@ember/service';
import DateService from 'weather/services/date';
import TemperatureService, {
  TemperatureFormat,
} from 'weather/services/temperature';
import { fahrenheitToCelsius } from 'weather/system/util';
import { DailyForecastData } from 'weather-data';

interface DailyForecastComponentArgs {
  dailyForecast: DailyForecastData;
  temperatureFormat: TemperatureFormat;
}

export default class DailyForecast extends Component<DailyForecastComponentArgs> {
  @service declare date: DateService;
  @service declare temperature: TemperatureService;

  get iconUrl(): DailyForecastData['weather'][0]['icon'] {
    let weather = this.args.dailyForecast.weather[0];
    assert('Weather object must exist', weather !== undefined);

    return `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  }

  get timestamp(): string {
    return String(this.args.dailyForecast.dt);
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
