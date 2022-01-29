import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import DateService from '../services/date'; // FIXME: Figure out the fixed path instead of using the relative path here

interface WeatherComponentArgs {
  weatherData: any;
}

export default class Weather extends Component<WeatherComponentArgs> {
  @service declare date: DateService;

  get sevenDayForecast(): any[] {
    return this.args.weatherData.daily.slice(1);
  }
}
