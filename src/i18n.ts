import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './locales/es.json';
import en from './locales/en.json';

const resources = {
  es: { 
    translation: es.translation 
  },
  en: { 
    translation: en.translation 
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // idioma por defecto
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
  });

// Keep the document's lang attribute in sync with the active UI language.
document.documentElement.lang = i18n.language;
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
