import React, { useState, useEffect, useRef } from "react";
import "./Weather.css";
import search_icon from "../assets/icons/search.png";
import wind_icon from "../assets/icons/wind.png";
import humidity_icon from "../assets/icons/humidity.png";
import ThemeToggler from "./ThemeToggler";
import LanguageToggler from "./LanguageToggler";
import { useTranslation } from "react-i18next"; // though this hook we will get access to t() function for that provedes translation from our localization files

const Weather = () => {
  let inputRef = useRef(null);
  const [weatherData, setWeatherData] = useState(false);

  const { t } = useTranslation(); // destructure t() function from the hook to use it in the component to display the text in the current language

  const handleInput = (event) => {
    inputRef.current.value = event.target.value;
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      search(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  const handleButtonClick = () => {
    search(inputRef.current.value);
    inputRef.current.value = "";
  };
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
    <div
      className="
      p-10
      place-self-center
      rounded-lg
      bg-[var(--interface-background-color)]
      flex 
      flex-col
      items-center
      text-[var(--text-n-icons-primary-color)]
      shadow-[10px_10px_5px_0px_var(--block-shadow-color)]
      "
    >
      <div className="search-bar flex items-center gap-3">
        <input
          type="text"
          ref={inputRef}
          onInput={handleInput}
          onKeyDown={handleInputKeyPress}
          placeholder="Search"
          className="
          h-12 border-none outline-none rounded-full pl-6 
          color-[var(--text-n-icons-secondary-color)] bg-[var(--element-background-color)] text-xl
          hover:bg-[var(--highlight-color)] hover:transition-all duration-300 ease-in-out"
        />
        <img
          src={search_icon}
          alt="search"
          onClick={handleButtonClick}
          className="
          w-12 p-4 rounded-full cursor-pointer
          bg-[var(--element-background-color)]
          hover:bg-[var(--highlight-color)]
          hover:transition-all hover:duratin-300 ease-in-out"
        />
      </div>
      <div>
        <svg className="weather-conditions">
          <use href={`/weatherConditions.svg#${weatherData.icon}`}></use>
        </svg>
      </div>
      <p className="temperature">{weatherData.temperature}°C</p>
      <p className="location">{weatherData.location}</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="humidity" />
          <div>
            <p>{weatherData.humidity}%</p>
            <span>{t("humidity")}</span>{" "}
            {/* The t() function takes the key "humidity" — this is a string identifier, not the actual text. It then refers to the i18n instance and looks up the translation for the "humidity" key in the current language.  */}
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="wind" />
          <div>
            <p>
              {weatherData.windSpeed} {t("m_per_hour")}
            </p>
            <span>{t("wind_speed")}</span>
            {/* The t() function takes the key "humidity" — this is a string identifier, not the actual text. It then refers to the i18n instance and looks up the translation for the "humidity" key in the current language.  */}
          </div>
        </div>
      </div>
      <div className="toggler-container">
        <ThemeToggler />
        <LanguageToggler />
      </div>
    </div>
  );
};

export default Weather;
