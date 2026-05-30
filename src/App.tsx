import { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import { weatherData } from './data';
import './App.css';

function App() {
  const [city, setCity] = useState('Cotonou');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [city]);

  function handleRefresh() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }

  return (
    <div className="container">
      <h1>Météo</h1>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        {Object.keys(weatherData).map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <WeatherCard city={city} loading={loading} />
      <button onClick={handleRefresh} disabled={loading}>
        {loading ? 'actualisation...' : 'actualiser'}
      </button>
    </div>
  );
}

export default App;