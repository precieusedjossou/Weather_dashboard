export interface WeatherInfo {
  temp: number;
  humidity: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'snowy';
}

export const weatherData: Record<string, WeatherInfo> = {
  Cotonou:  { temp: 31, humidity: 78, condition: 'sunny' },
  Paris:    { temp: 14, humidity: 62, condition: 'cloudy' },
  Tokyo:    { temp: 22, humidity: 55, condition: 'rainy' },
  Montreal: { temp: -3, humidity: 80, condition: 'snowy' },
};

export const icons: Record<WeatherInfo['condition'], string> = {
  sunny:  '☀️',
  cloudy: '☁️',
  rainy:  '🌧️',
  snowy:  '❄️',
};