import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // though this hook we will get access to i18n instance and will be able to change the language of it

export default function useLanguage() {
  const { i18n } = useTranslation();  // Destructure the i18n instance from the hook
  const currentLanguage = i18n.language;  // Get the current language set in i18n instance

  const [language, setLanguage] = useState(() => {  // Initialize the state with the value from localStorage or default to "uk" (not i18n instance, the app's state)
    return localStorage.getItem("language") || "uk";
  });

  useEffect(() => {
    localStorage.setItem("language", language); // update LocalStorage whenever the state 'language' changes
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === "uk" ? "en" : "uk";
    setLanguage(newLanguage); // update the state with the new language
    i18n.changeLanguage(currentLanguage === "uk" ? "en" : "uk");  // update the i18n instance with the new language
  };

  return { language, toggleLanguage }; // the hook provides the current languge (state) and the fucntion to change it (updating the state and i18n instance)
}
