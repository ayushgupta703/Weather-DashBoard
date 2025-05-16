import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import WeatherCard from './Components/WeatherCard';
import './App.css';

// Backend URL configuration
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://192.168.1.9:5000';

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
      const response = await axios.get(`${BACKEND_URL}/weather?city=${city}`);
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

      <div className="search-section">
        <SearchBar onSearch={fetchWeather} />
      </div>

      <div className="weather-section">
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p className="loading-text">Loading weather data...</p>
          </div>
        )}
        
        {error && (
          <div className="error">
            <i className="error-icon">⚠️</i>
            {error}
          </div>
        )}
        
        {weatherData && <WeatherCard weatherData={weatherData} />}
      </div>
    </div>
  );
}

export default App;