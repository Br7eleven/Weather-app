import React from "react";

const getIconUrl = (iconCode) =>
  `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

const WeatherCard = ({ data }) => {
  if (!data) return null;

  const {
    name,
    sys: { country },
    main: { temp, humidity, pressure, feels_like },
    weather,
    wind: { speed },
  } = data;

  const icon = weather[0].icon;
  const main = weather[0].main;
  const desc = weather[0].description;

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-white shadow-lg space-y-4">
      <h2 className="text-2xl font-bold text-center">
        {name}, {country}
      </h2>

      <div className="flex flex-col items-center">
        <img src={getIconUrl(icon)} alt={desc} className="w-28 h-28" />
        <p className="text-5xl font-extrabold">{Math.round(temp)}°C</p>
        <p className="capitalize text-lg">{main} - {desc}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>🌡️ Feels Like: {Math.round(feels_like)}°C</div>
        <div>💧 Humidity: {humidity}%</div>
        <div>🌬️ Wind: {speed} m/s</div>
        <div>📊 Pressure: {pressure} hPa</div>
      </div>
    </div>
  );
};

export default WeatherCard;