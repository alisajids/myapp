import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { LanguageContext } from './IntProvider/LanguageProvider';

const MyComponent = () => {
  const { locale, handleLocaleChange } = useContext(LanguageContext);

  const changeLanguage = (e) => {
    const newLocale = e.target.value;
    handleLocaleChange(newLocale);
  };

  return (
    <div>
      <h1>
      <FormattedMessage id="hello" />
        <FormattedMessage id="Username" />
      </h1>
      <p>
        <FormattedMessage id="languageSelector" />
        <select value={locale} onChange={changeLanguage}>
          <option value="en-US">English (US)</option>
          <option value="fr-FR">French (France)</option>
          <option value="sa-SA">Arabic (SA)</option>
        </select>
      </p>
    </div>
  );
};

export default MyComponent;
