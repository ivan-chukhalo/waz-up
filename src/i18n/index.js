// The filename index.js is not a requirement of i18next, but rather a feature of the JavaScript import system (including Node.js and frontend bundlers). 
// 
// My bundler automatically looks for an index.js file inside the i18n folder. 
// Instead of writing a long path, I can simply import the folder — and it gives me everything you need.

import i18n from "i18next"; // core package
import { initReactI18next } from "react-i18next"; // adaptaino for React
import LanguageDetector from "i18next-browser-languagedetector"; // easy browser language detection

import translationEN from "./en.json";
import translationUK from "./uk.json";

i18n
  .use(LanguageDetector) // connection LanguageDetector as a plugin to i18n
  .use(initReactI18next) // connection react-i18next as a plugin to i18n so that we can work with components through hook useTranslation
  .init({
    // initialization settings for i18n-object
    fallbackLng: "uk", // if a language is not found, use this one
    resources: {
      // object with translations
      en: { translation: translationEN }, // key and resourse for the english localization
      uk: { translation: translationUK }, // key and resourse for the ukrainian localization
    },
  });

export default i18n; // export i18n instance to be used in the app
