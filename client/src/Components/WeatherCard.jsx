import React from 'react';

const WeatherCard = ({ weatherData }) => {
    if (!weatherData) return null;

    const iconUrl = `https://openweathermap.org/img/wn/${weatherData.icon}@4x.png`;

    return (
        <div className="weather-card">
            <h2 className="location">{weatherData.city}, {weatherData.country}</h2>
            <div className="weather-main">
                <img src={iconUrl} alt={weatherData.condition} style={{ filter: 'var(--icon-filter)' }} />
                <div>
                    <p className="temperature">{Math.round(weatherData.temperature)}°C</p>
                    <p className="condition">{weatherData.description}</p>
                </div>
            </div>
            <div className="weather-details">
                <div className="detail-item">
                    <i>💧</i>
                    <span className="detail-label">Humidity</span>
                    <span className="detail-value">{weatherData.humidity}%</span>
                </div>
                <div className="detail-item">
                    <i>🌬️</i>
                    <span className="detail-label">Wind Speed</span>
                    <span className="detail-value">{weatherData.windSpeed} m/s</span>
                </div>
                <div className="detail-item">
                    <i>🌡️</i>
                    <span className="detail-label">Feels Like</span>
                    <span className="detail-value">{Math.round(weatherData.temperature)}°C</span>
                </div>
                <div className="detail-item">
                    <i>☁️</i>
                    <span className="detail-label">Conditions</span>
                    <span className="detail-value">{weatherData.condition}</span>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;