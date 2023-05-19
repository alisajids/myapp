import React, { createContext, useState } from 'react';
import { IntlProvider } from 'react-intl';
import enUS from './messages/en-US';
import frFR from './messages/fr-FR';
import saSA from './messages/sa-SA';

const messages = {
  'en-US': enUS,
  'fr-FR': frFR,
  'sa-SA': saSA,
};

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('en-US');

  const handleLocaleChange = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, handleLocaleChange }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
