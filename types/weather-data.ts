export interface DailyForecastData {
  dt: number;
  weather: Array<{ icon: string }>;
  temp: {
    min: number;
    max: number;
  };
}

export interface CurrentWeatherData {
  temp: number;
  weather: Array<{ main: string; icon: string }>;
}

export interface WeatherData {
  current: CurrentWeatherData;
  daily: DailyForecastData[];
}
