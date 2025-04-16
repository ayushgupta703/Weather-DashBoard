import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import WeatherCard from './Components/WeatherCard';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || false
  );

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    setWeatherData(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeatherData(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Weather Dashboard</h1>
        <button
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <SearchBar onSearch={fetchWeather} />

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p className="loading-text">Loading weather data...</p>
        </div>
      )}
      {error && <div className="error">{error}</div>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;