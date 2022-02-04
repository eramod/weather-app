import { assert } from '@ember/debug';
import Service from '@ember/service';

// FIXME: Do I need to rename this to DateService?

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

/**
 * The date service provides a way for parts of the app to get the current time.
 * It also allows the current time to be frozen, which is useful for testing. When
 * time isn't frozen, the service acts as a simple wrapper around `Date.now()`.
 *
 * This service would also be a good place to implement automatic time updates
 * such as could be used in a "live" mode.
 */
export default class DateService extends Service {
  get now(): Date {
    return new Date();
  }

  get month(): string {
    const month = MONTHS[this.now.getMonth()];

    assert('Month must be defined', month !== undefined);
    return month;
  }

  getDay(timestamp: string): string {
    let date = new Date(parseInt(timestamp) * 1000);
    let day = DAYS[date.getDay()];

    assert('Day must be a number between 0 and 6', day !== undefined);

    return day;
  }

  /** Date of the month (1-31) */
  get date(): number {
    return this.now.getDate();
  }

  get year(): number {
    return this.now.getFullYear();
  }

  get fullDate(): string {
    return `${this.month} ${this.date}, ${this.year}`;
  }
}
