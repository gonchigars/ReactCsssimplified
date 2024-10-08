import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import WeatherDisplay from "./components/WeatherDisplay";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [selectedCity, setSelectedCity] = useState("New York");
  const [dataType, setDataType] = useState("single-line");
  const [weatherData, setWeatherData] = useState(null);

  // Simulate API calls
  const getWeatherSingleLine = async (city) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return `${city}: 22°C, Sunny`;
  };

  const getWeatherSingleObject = async (city) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      city: city,
      temperature: 22,
      condition: "Sunny",
      humidity: 60,
      windSpeed: 5,
    };
  };

  const getWeatherMultipleObjects = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [
      { city: "New York", temperature: 22, condition: "Sunny" },
      { city: "London", temperature: 15, condition: "Cloudy" },
      { city: "Tokyo", temperature: 28, condition: "Rainy" },
      { city: "Sydney", temperature: 20, condition: "Partly Cloudy" },
      { city: "Paris", temperature: 18, condition: "Clear" },
    ];
  };

  useEffect(() => {
    setWeatherData(null); // Reset weather data before fetching new data

    const fetchWeather = async () => {
      let data;
      switch (dataType) {
        case "single-line":
          data = await getWeatherSingleLine(selectedCity);
          break;
        case "single-object":
          data = await getWeatherSingleObject(selectedCity);
          break;
        case "multiple-objects":
          data = await getWeatherMultipleObjects();
          break;
        default:
          data = await getWeatherSingleLine(selectedCity);
      }
      setWeatherData(data);
    };

    fetchWeather();
  }, [selectedCity, dataType]);

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          dataType={dataType}
          setDataType={setDataType}
        />
        <WeatherDisplay weatherData={weatherData} dataType={dataType} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
