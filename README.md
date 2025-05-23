# 🌦️ Weather App

A sleek and responsive weather forecast application built using **React + Vite** and styled with **Tailwind CSS**. It fetches real-time weather data from the [OpenWeatherMap API](https://openweathermap.org/).

---

## 🚀 Features

- 🔍 Search weather by **city name**
- 🌤️ Real-time weather updates using **OpenWeather API**
- 📱 Fully **responsive UI**
- 🎨 Beautiful modern **Tailwind UI with animation**
- 🌡️ Displays: Temperature, Humidity, Wind Speed, Pressure, Feels Like, Weather Condition
- ⚡ Optimized with **debounce input**, no unnecessary API calls
- 🖱️ Fetches data **only on button click**

---

## 📷 Preview

![Project Screenshot](./weatherapp.png)


---

## 🛠️ Tech Stack

- **React** (with Vite)
- **Tailwind CSS**
- **OpenWeatherMap API**

---

## 🔧 Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/Br7eleven/Weather-app.git
cd Weather-app
```
# Create .env file with your API key
echo "VITE_WEATHER_API_KEY=your_openweathermap_api_key_here" > .env

# Install dependencies
npm install

# Run development server
npm run dev
