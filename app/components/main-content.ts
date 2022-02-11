import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { taskFor } from 'ember-concurrency-ts';
import { task } from 'ember-concurrency';
import { DailyForecastData, WeatherData } from 'weather-data'; // FIXME: Why is this import not weather/types/weather-data?
import DateService from 'weather/services/date';
import TemperatureService, {
  TemperatureFormat,
} from 'weather/services/temperature';

interface WeatherComponentArgs {
  weatherData: WeatherData;
}

interface LocationData {
  latitude: number;
  longitude: number;
}

export default class Weather extends Component<WeatherComponentArgs> {
  @service declare date: DateService;
  @service declare temperature: TemperatureService;

  @tracked query = '';

  get sevenDayForecast(): DailyForecastData[] {
    return this.args.weatherData.daily.slice(1);
  }

  @action
  setTempFormat(format: TemperatureFormat): void {
    this.temperature.format = format;
  }

  @action
  onSubmit(event: Event): void {
    event.preventDefault();
    void this.forwardGeocoding.perform();
  }

  // It looks like this API endpoint will take a human readable address and return a lat/long pair.
  // Once I have a lat/long pair, I can use that in the model hook to get the weather data instead of hard-coding it to Portland.
  // Will likely need to deal with queryParams for this, but not sure how to do that yet.
  @task({ restartable: true })
  forwardGeocoding = taskFor(async (): Promise<LocationData> => {
    let response = await fetch(
      'https://api.positionstack.com/v1/forward?access_key=93d1b8b7ffb0b37ae8a3fd4313d9b3b5&query=Chicago'
    );
    debugger;
    if (response.ok) {
      let data = await response.json();
    }
  });
}
