import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN_US from "./locales/en-us/translation.json"
import translationDE from "./locales/de/translation.json"


import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

const resources = {
  en_us: {
    translation: translationEN_US
  },
  de: {
    translation: translationDE
  }

}

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

  export class i18nX 
  {
    static translateArgs(t1, ...args) {
      let translated = t1
      const arrayLength = args.length
      if (typeof translated !== "undefined" && translated !== null) {
        for (let argNum = 0; argNum < arrayLength; argNum += 1) {
          translated = translated.replace(`{${argNum}}`, args[argNum])
        }
      }
      return translated
    }

    static t(key, ...args) {
        let translation = i18n.t(key);
        return i18nX.translateArgs(translation, ...args);
    }
}


export default i18n;
