import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import frTranslation from "../public/locales/fr/translation.json"
import enTranslation from "../public/locales/en/translation.json"

const resources= {
 fr: {
    translation: frTranslation 
  },
  en: {
    translation: enTranslation
  }
}


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", // langue par défaut
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;