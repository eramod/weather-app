/**
 * Converts a given temperature from Celsius to Fahrenheit
 *
 * @returns the temperature in Fahrenheit
 */
export function celsiusToFahrenheit(celsius: number): number {
  return Math.round(celsius * (9 / 5) + 32);
}

/**
 * Converts a given temperature from Fahrenheit to Celsius
 *
 * @returns the temperature in Celsius
 */
export function fahrenheitToCelsius(fahrenheit: number): number {
  // Converts the temperature to Celsius
  return Math.round((fahrenheit - 32) * (5 / 9));
}
