import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export enum TemperatureFormat {
  CELSIUS = 'celsius',
  FAHRENHEIT = 'fahrenheit',
}

export default class TemperatureFormatService extends Service {
  /**
   * Current temperature format.
   * Defaults to Fahrenheit.
   */
  @tracked format: TemperatureFormat = TemperatureFormat.FAHRENHEIT;
}
