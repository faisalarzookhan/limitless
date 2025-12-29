import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Languages } from 'lucide-react';
import PropTypes from 'prop-types';

/**
 * Language Switcher Component
 * Provides language selection functionality using react-i18next
 */
const LanguageSwitcher = ({
  showFlags = false,
  compact = false,
  className = '',
  buttonClassName = '',
}) => {
  const { i18n, t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');

  const languages = [
    {
      code: 'en',
      name: t('common.english', { defaultValue: 'English' }),
      flag: '🇺🇸',
    },
    {
      code: 'hi',
      name: t('common.hindi', { defaultValue: 'Hindi' }),
      flag: '🇮🇳',
    },
    {
      code: 'ar',
      name: t('common.arabic', { defaultValue: 'Arabic' }),
      flag: '🇸🇦',
    },
    {
      code: 'es',
      name: t('common.spanish', { defaultValue: 'Spanish' }),
      flag: '🇪🇸',
    },
  ];

  useEffect(() => {
    // Update current language when i18n language changes
    const handleLanguageChange = () => {
      setCurrentLanguage(i18n.language);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const changeLanguage = langCode => {
    i18n.changeLanguage(langCode);
    setCurrentLanguage(langCode);
  };

  const currentLangInfo =
    languages.find(lang => lang.code === currentLanguage) || languages[0];

  if (compact) {
    return (
      <div className={`language-switcher-compact ${className}`}>
        <select
          value={currentLanguage}
          onChange={e => changeLanguage(e.target.value)}
          className={`lang-select ${buttonClassName}`}
          aria-label={t('common.selectLanguage', {
            defaultValue: 'Select Language',
          })}
        >
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>
              {showFlags && lang.flag} {lang.name}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className={`language-switcher ${className}`}>
      <div className="dropdown">
        <button
          className={`lang-button ${buttonClassName}`}
          aria-haspopup="true"
          aria-expanded="false"
          title={t('common.changeLanguage', {
            defaultValue: 'Change Language',
          })}
        >
          <Globe size={18} />
          {showFlags && (
            <span className="lang-flag">{currentLangInfo.flag}</span>
          )}
          <span className="lang-name">{currentLangInfo.name}</span>
        </button>

        <div className="dropdown-menu">
          <div className="dropdown-header">
            <Languages size={16} />
            <span>{t('common.languages', { defaultValue: 'Languages' })}</span>
          </div>

          {languages.map(lang => (
            <button
              key={lang.code}
              className={`dropdown-item ${currentLanguage === lang.code ? 'active' : ''}`}
              onClick={() => changeLanguage(lang.code)}
              aria-current={currentLanguage === lang.code ? 'true' : 'false'}
            >
              {showFlags && <span className="item-flag">{lang.flag}</span>}
              <span className="item-name">{lang.name}</span>
              {currentLanguage === lang.code && (
                <span className="checkmark">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * withTranslation Higher-Order Component
 * Wraps components with translation functionality
 */
const withTranslation = WrappedComponent => {
  return props => {
    const { t, i18n } = useTranslation();

    return <WrappedComponent {...props} t={t} i18n={i18n} />;
  };
};

/**
 * TranslatedText Component
 * Renders translated text with support for dynamic values
 */
const TranslatedText = ({
  i18nKey,
  ns,
  values = {},
  children,
  fallback,
  ...props
}) => {
  const { t } = useTranslation(ns);

  const translatedText = t(i18nKey, {
    ...values,
    defaultValue: fallback || i18nKey,
  });

  return <span {...props}>{children || translatedText}</span>;
};

/**
 * Multilingual Content Provider
 * Provides translation context to child components
 */
const MultilingualProvider = ({ children }) => {
  const { t, i18n } = useTranslation();

  return (
    <div data-language={i18n.language}>
      {typeof children === 'function'
        ? children({ t, i18n, currentLanguage: i18n.language })
        : children}
    </div>
  );
};

LanguageSwitcher.propTypes = {
  /** Whether to show flags */
  showFlags: PropTypes.bool,
  /** Whether to use compact view */
  compact: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Additional button CSS classes */
  buttonClassName: PropTypes.string,
};

TranslatedText.propTypes = {
  /** Translation key */
  i18nKey: PropTypes.string.isRequired,
  /** Namespace */
  ns: PropTypes.string,
  /** Values to interpolate */
  values: PropTypes.object,
  /** Fallback text */
  fallback: PropTypes.string,
  /** Child elements */
  children: PropTypes.node,
};

MultilingualProvider.propTypes = {
  /** Child elements or render function */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export {
  LanguageSwitcher,
  TranslatedText,
  MultilingualProvider,
  withTranslation,
  useTranslation,
};
export default LanguageSwitcher;
