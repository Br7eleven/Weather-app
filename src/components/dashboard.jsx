import React, { useState } from "react";
import WeatherCard from "./WeatherCard";

const Dashboard = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async () => {
    if (!city.trim()) {
      alert("City name likho bhai!");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod !== 200) {
        alert("City not found!");
        setWeatherData(null);
      } else {
        setWeatherData(data);
      }
    } catch (err) {
      alert("Error fetching weather!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-4 h-full">
      <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl w-full max-w-md text-white shadow-xl space-y-6">
        <h1 className="text-3xl font-bold text-center">🌤️ Weather App</h1>

        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-3 rounded-lg bg-white/10 border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
        />

        <button
          onClick={fetchWeather}
          className="w-full py-3 bg-white/30 hover:bg-white/50 transition-all rounded-lg font-semibold"
        >
          {loading ? "Loading..." : "Get Weather"}
        </button>

        {weatherData && (
          <div className="animate-fade-in">
            <WeatherCard data={weatherData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
