import React from "react";

function WeatherDisplay({ weatherData, dataType }) {
  if (!weatherData) {
    return (
      <main className="weather-display">
        <p>Loading weather data...</p>
      </main>
    );
  }

  let content;
  switch (dataType) {
    case "single-line":
      content = <p>{weatherData}</p>;
      break;
    case "single-object":
      content = (
        <div className="weather-info">
          <h2>{weatherData.city}</h2>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Condition: {weatherData.condition}</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind Speed: {weatherData.windSpeed} m/s</p>
        </div>
      );
      break;
    case "multiple-objects":
      if (!Array.isArray(weatherData)) {
        return (
          <main className="weather-display">
            <p>Loading weather data...</p>
          </main>
        );
      }
      content = (
        <div>
          {weatherData.map((cityWeather) => (
            <div key={cityWeather.city} className="city-weather">
              <h3>{cityWeather.city}</h3>
              <p>Temperature: {cityWeather.temperature}°C</p>
              <p>Condition: {cityWeather.condition}</p>
            </div>
          ))}
        </div>
      );
      break;
    default:
      content = <p>Unknown data type.</p>;
  }

  return <main className="weather-display">{content}</main>;
}

export default WeatherDisplay;
