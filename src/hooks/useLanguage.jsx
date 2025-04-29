import { useState, useEffect } from "react";

export default function useLanguage() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "uk";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    /* initialazing DOM with languge*/
    console.log(language);
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === "uk" ? "en" : "uk";
    setLanguage(newLanguage);
    /* apply changes to DOM*/
  };

  return { language, toggleLanguage };
}
