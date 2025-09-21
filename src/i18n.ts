import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";


i18n.use(Backend) // carga los archivos desde /public/locales
  .use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: "es",
    lng: "es",
    interpolation: { escapeValue: false },
      
  });
export default i18n;