import React from 'react';

const WeatherCard = ({ weatherData }) => {
    if (!weatherData) return null;

    const iconUrl = `https://openweathermap.org/img/wn/${weatherData.icon}@4x.png`;


    // Get weather icon based on condition
    const getWeatherIcon = (condition) => {
        const icons = {
            'Clear': '☀️',
            'Clouds': '☁️',
            'Rain': '🌧️',
            'Drizzle': '🌦️',
            'Thunderstorm': '⛈️',
            'Snow': '🌨️',
            'Mist': '🌫️',
            'Smoke': '💨',
            'Haze': '😶‍🌫️',
            'Dust': '💨',
            'Fog': '🌫️',
            'Sand': '🏜️',
            'Ash': '🌋',
            'Squall': '💨',
            'Tornado': '🌪️'
        };
        return icons[condition] || '🌈';
    };

    return (
        <div className="weather-card">
            <h2 className="location">
                <i className="location-icon">📍</i>
                {weatherData.city}, {weatherData.country}
            </h2>
            
            <div className="weather-main">
                <img 
                    src={iconUrl} 
                    alt={weatherData.condition} 
                    className="weather-icon"
                    style={{ filter: 'var(--icon-filter)' }} 
                />
                <div className="temperature-container">
                    <p className="temperature">{Math.round(weatherData.temperature)}°C</p>
                    <p className="condition">
                        <span className="condition-icon">
                            {getWeatherIcon(weatherData.condition)}
                        </span>
                        {weatherData.description}
                    </p>
                    <p className="feels-like">
                        Feels like {Math.round(weatherData.feelsLike)}°C
                    </p>
                </div>
            </div>

            <div className="weather-details">
                <div className="detail-item">
                    <i className="detail-icon">💧</i>
                    <span className="detail-label">Humidity</span>
                    <span className="detail-value">{weatherData.humidity}%</span>
                </div>
                <div className="detail-item">
                    <i className="detail-icon">🌬️</i>
                    <span className="detail-label">Wind Speed</span>
                    <span className="detail-value">{weatherData.windSpeed} m/s</span>
                </div>
                <div className="detail-item">
                    <i className="detail-icon">🌡️</i>
                    <span className="detail-label">Feels Like</span>
                    <span className="detail-value">{Math.round(weatherData.feelsLike)}°C</span>
                </div>
                <div className="detail-item">
                    <i className="detail-icon">☁️</i>
                    <span className="detail-label">Clouds</span>
                    <span className="detail-value">{weatherData.clouds}%</span>
                </div>
            </div>

            <div className="weather-footer">
                <p className="last-updated">
                    Last updated: {new Date().toLocaleTimeString()}
                </p>
            </div>
        </div>
    );
};

export default WeatherCard;