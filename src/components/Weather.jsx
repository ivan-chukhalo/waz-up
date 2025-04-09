import React, { useState, useEffect, useRef } from "react";
import "./Weather.css";
import search_icon from "../assets/icons/search.png";
import clear_icon from "../assets/icons/clear.png";
// import cloud_icon from '../assets/icons/cloud.png'
// import drizzle_icon from '../assets/icons/drizzle.png'
// import rain_icon from '../assets/icons/rain.png'
// import snow_icon from '../assets/icons/snow.png'
import wind_icon from "../assets/icons/wind.png";
import humidity_icon from "../assets/icons/humidity.png";
import weatherSpray_icons from "../assets/icons/1stSetMonoIndex.png";

const Weather = () => {
  let inputRef = useRef(null);
  const [weatherData, setWeatherData] = useState(false);

  const handleInput = (event) => {
    inputRef.current = event.target.value;
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      search(inputRef.current);
    }
  };

  const handleButtonClick = () => {
    search(inputRef.current);
  }

  const search = async (city) => {
    try {
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/?key=${
        import.meta.env.VITE_API_KEY
      }&unitGroup=metric`;
      const response = await fetch(url, { mode: "cors" });
      const data = await response.json();
      setWeatherData({
        humidity: data.currentConditions.humidity,
        windSpeed: data.currentConditions.windspeed,
        temperature: data.currentConditions.temp,
        location: data.address.toUpperCase(),
        icon: data.currentConditions.icon,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    search("kyiv");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input
          type="text"
          onInput={handleInput}
          onKeyDown={handleInputKeyPress}
          placeholder="Search"
        />
        <img src={search_icon} alt="search" onClick={handleButtonClick}/>
      </div>
      <img className="weather-icon" src={clear_icon} alt="clear" />
      <p className="temperature">{weatherData.temperature}°C</p>
      <p className="location">{weatherData.location}</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="humidity" />
          <div>
            <p>{weatherData.humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="humidity" />
          <div>
            <p>{weatherData.windSpeed} m/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
