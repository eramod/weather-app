import Component from '@glimmer/component';

interface CurrentWeatherArgs {
  currentWeather: any;
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
    return Math.round(this.args.currentWeather.temp);
  }

  get currentWeatherIconUrl(): string {
    const icon = this.args.currentWeather.weather[0].icon;
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }
}
