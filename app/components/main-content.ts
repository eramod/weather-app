import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { DailyForecastData, WeatherData } from 'weather-data'; // FIXME: Why is this import not weather/types/weather-data?
import DateService from 'weather/services/date';
import TemperatureService, {
  TemperatureFormat,
} from 'weather/services/temperature';
interface WeatherComponentArgs {
  weatherData: WeatherData;
}

export default class Weather extends Component<WeatherComponentArgs> {
  @service declare date: DateService;
  @service declare temperature: TemperatureService;

  get sevenDayForecast(): DailyForecastData[] {
    return this.args.weatherData.daily.slice(1);
  }

  @action
  setTempFormat(format: TemperatureFormat): void {
    this.temperature.format = format;
  }
}
