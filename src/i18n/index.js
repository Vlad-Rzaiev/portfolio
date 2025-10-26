import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../locales/en/common.json';
import uk from '../locales/uk/common.json';
import pl from '../locales/pl/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      uk: { translation: uk },
      pl: { translation: pl },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'uk', 'pl'],
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'lang',
    },
    interpolation: { escapeValue: false },
  });

const setHtmlLang = lng => {
  document.documentElement.setAttribute('lang', lng);
};
setHtmlLang(i18n.language);
i18n.on('languageChanged', setHtmlLang);

export default i18n;
