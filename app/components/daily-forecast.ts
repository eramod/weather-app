import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import DateService from 'weather/services/date';

interface DailyForecastComponentArgs {
  dailyForecast: any; // FIXME: Add type
}

export default class DailyForecast extends Component<DailyForecastComponentArgs> {
  @service declare date: DateService;

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
}
