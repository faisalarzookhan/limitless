import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import en from './locales/en/translation.json';
import hi from './locales/hi/translation.json';
import ar from './locales/ar/translation.json';
import es from './locales/es/translation.json';

// Configuration for i18n
const resources = {
  en: {
    translation: en,
  },
  hi: {
    translation: hi,
  },
  ar: {
    translation: ar,
  },
  es: {
    translation: es,
  },
};

i18n
  .use(LanguageDetector) // Detects user's language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Default language
    debug: process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false, // React already safes from xss
    },

    detection: {
      order: [
        'queryString',
        'cookie',
        'localStorage',
        'sessionStorage',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],
      caches: ['localStorage', 'cookie'],
    },

    // Special options for RTL languages
    react: {
      useSuspense: false,
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
    },
  });

export default i18n;
