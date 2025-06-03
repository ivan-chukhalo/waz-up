import React, { useState, useEffect, useRef } from "react";
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
      w-full h-full sm:w-auto sm:h-auto
      flex place-self-center flex-col items-center justify-evenly sm:items-evenly
      px-10 sm:p-10 rounded-lg 
      bg-[var(--interface-background-color)] shadow-[10px_10px_5px_0px_var(--block-shadow-color)]
      text-[var(--text-n-icons-primary-color)]"
    >
      <div className="search-section flex items-center gap-4 sm:gap-2">
        <input
          type="text"
          ref={inputRef}
          onInput={handleInput}
          onKeyDown={handleInputKeyPress}
          placeholder="Search"
          className="
          basis-auto shrink-1
          w-full h-16 sm:h-12 border-none outline-none rounded-full pl-0 sm:pl-6 
          text-center sm:text-left color-[var(--text-n-icons-secondary-color)] bg-[var(--element-background-color)] text-xl
          hover:bg-[var(--highlight-color)] hover:transition-all duration-300 ease-in-out"
        />
        <svg
          onClick={handleButtonClick}
          className="
          fill-[var(--text-n-icons-primary-color)]
          w-14 h-14 p-2 sm:w-12 sm:h-12 rounded-full cursor-pointer shrink-0
          bg-[var(--element-background-color)] hover:bg-[var(--highlight-color)]
          hover:transition-all hover:duratin-300 ease-in-out"
        >
          <use href={"/weatherConditions.svg#search"}></use>
        </svg>
      </div>
      <div>
        <svg className="w-38 p-4 fill-[var(--text-n-icons-primary-color)]">
          <use href={`/weatherConditions.svg#${weatherData.icon}`}></use>
        </svg>
      </div>
      <p className="text-6xl sm:text-8xl leading-none text-[var(--text-n-icons-primary-color)]">
        {weatherData.temperature}°C
      </p>
      <p className="text-4xl text-[var(--text-n-icons-primary-color)]">
        {weatherData.location}
      </p>
      <div className="w-full flex my-6 justify-between text-[var(--text-n-icons-primary-color)]">
        <div className="flex gap-3 items-center text-2xl">
          <svg className="w-10 fill-[var(--text-n-icons-primary-color)]">
            <use href="/weatherConditions.svg#humidity"></use>
          </svg>
          <div>
            <p>{weatherData.humidity}%</p>
            <span className="block text-lg">{t("humidity")}</span>{" "}
            {/* The t() function takes the key "humidity" — this is a string identifier, not the actual text. It then refers to the i18n instance and looks up the translation for the "humidity" key in the current language.  */}
          </div>
        </div>
        <div className="flex gap-3 items-center text-2xl">
          <svg className="w-10 stroke-[var(--text-n-icons-primary-color)]">
            <use href="/weatherConditions.svg#wind_speed"></use>
          </svg>
          <div>
            <p>
              {weatherData.windSpeed} {t("m_per_hour")}
            </p>
            <span className="block text-lg">{t("wind_speed")}</span>
            {/* The t() function takes the key "humidity" — this is a string identifier, not the actual text. It then refers to the i18n instance and looks up the translation for the "humidity" key in the current language.  */}
          </div>
        </div>
      </div>
      <div className="flex gap-6 justify-center">
        <ThemeToggler />
        <LanguageToggler />
      </div>
    </div>
  );
};

export default Weather;
