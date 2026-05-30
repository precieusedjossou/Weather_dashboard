import { weatherData, icons } from './data';

interface Props {
  city: string;
  loading: boolean;
}

function WeatherCard({ city, loading }: Props) {
  if (loading) {
    return (
      <div className="card">
        <p className="loading">chargement...</p>
      </div>
    );
  }

  const data = weatherData[city];

  return (
    <div className="card">
      <p className="city-name">{city}</p>
      <div className="icon">{icons[data.condition]}</div>
      <p className="temp">{data.temp}°C</p>
      <p className="humidity">Humidité : <span>{data.humidity}%</span></p>
    </div>
  );
}

export default WeatherCard;