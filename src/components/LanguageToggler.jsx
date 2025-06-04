import React from "react";
import Toggler from "./Toggler";
import useLanguage from "../hooks/useLanguage";

const LanguageToggler = () => {
  const { language, toggleLanguage } = useLanguage();
  const valueList = {
    uk: "🇬🇧",
    en: "🇺🇦",
  };

  return (
    <Toggler
      value={language}
      valueList={valueList}
      useAction={toggleLanguage}
    />
  );
};

export default LanguageToggler;
