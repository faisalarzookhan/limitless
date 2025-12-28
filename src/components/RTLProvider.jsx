import React, { useEffect, createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

// Create RTL context
const RTLContext = createContext();

/**
 * RTL Provider Component
 * Provides RTL direction context based on selected language
 */
const RTLProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [isRTL, setIsRTL] = React.useState(false);

  // List of RTL languages
  const rtlLanguages = ['ar', 'he', 'fa', 'ur', 'ku', 'dv', 'ha', 'ps', 'sd', 'ug', 'yi'];

  // Update RTL state when language changes
  useEffect(() => {
    const currentLanguage = i18n.language || 'en';
    const isCurrentRTL = rtlLanguages.includes(currentLanguage.split('-')[0]);
    
    setIsRTL(isCurrentRTL);
    
    // Update document direction
    document.documentElement.dir = isCurrentRTL ? 'rtl' : 'ltr';
    
    // Add/remove RTL class to body
    if (isCurrentRTL) {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }, [i18n.language]);

  // Update RTL state when i18n language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      const currentLanguage = i18n.language || 'en';
      const isCurrentRTL = rtlLanguages.includes(currentLanguage.split('-')[0]);
      
      setIsRTL(isCurrentRTL);
      
      // Update document direction
      document.documentElement.dir = isCurrentRTL ? 'rtl' : 'ltr';
      
      // Update body classes
      if (isCurrentRTL) {
        document.body.classList.add('rtl');
        document.body.classList.remove('ltr');
      } else {
        document.body.classList.add('ltr');
        document.body.classList.remove('rtl');
      }
    };

    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const value = {
    isRTL,
    toggleRTL: () => {
      const newRTL = !isRTL;
      setIsRTL(newRTL);
      document.documentElement.dir = newRTL ? 'rtl' : 'ltr';
      
      if (newRTL) {
        document.body.classList.add('rtl');
        document.body.classList.remove('ltr');
      } else {
        document.body.classList.add('ltr');
        document.body.classList.remove('rtl');
      }
    }
  };

  return (
    <RTLContext.Provider value={value}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'rtl-layout' : 'ltr-layout'}>
        {children}
      </div>
    </RTLContext.Provider>
  );
};

/**
 * Custom hook to use RTL context
 */
const useRTL = () => {
  const context = useContext(RTLContext);
  if (!context) {
    throw new Error('useRTL must be used within an RTLProvider');
  }
  return context;
};

/**
 * RTL-aware component that adjusts its layout based on direction
 */
const RTLComponent = ({ 
  children, 
  className = '', 
  style = {},
  as: Component = 'div',
  ...props 
}) => {
  const { isRTL } = useRTL();
  
  const rtlClassName = `${className} ${isRTL ? 'rtl' : 'ltr'}`.trim();
  
  const rtlStyle = {
    ...style,
    ...(isRTL && {
      direction: 'rtl',
      textAlign: 'right'
    })
  };

  return (
    <Component 
      className={rtlClassName} 
      style={rtlStyle}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * Bidi-aware text component for handling mixed LTR/RTL content
 */
const BidiText = ({ 
  children, 
  className = '', 
  style = {},
  ...props 
}) => {
  const { isRTL } = useRTL();
  
  return (
    <span 
      className={`bidi-text ${className}`}
      style={{
        ...style,
        unicodeBidi: 'embed',
        direction: isRTL ? 'rtl' : 'ltr'
      }}
      {...props}
    >
      {children}
    </span>
  );
};

/**
 * RTL-aware flex container
 */
const RTLFlex = ({ 
  children, 
  className = '', 
  style = {},
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  ...props 
}) => {
  const { isRTL } = useRTL();
  
  // Adjust direction for RTL
  const getAdjustedDirection = () => {
    if (!isRTL) return direction;
    
    if (direction === 'row') return 'row-reverse';
    if (direction === 'row-reverse') return 'row';
    return direction;
  };
  
  // Adjust justify content for RTL
  const getAdjustedJustify = () => {
    if (!isRTL) return justify;
    
    switch (justify) {
      case 'start': return 'end';
      case 'end': return 'start';
      case 'space-between': return 'space-between'; // This stays the same
      case 'space-around': return 'space-around'; // This stays the same
      case 'space-evenly': return 'space-evenly'; // This stays the same
      default: return justify;
    }
  };
  
  return (
    <div
      className={`rtl-flex ${className}`}
      style={{
        ...style,
        display: 'flex',
        flexDirection: getAdjustedDirection(),
        justifyContent: getAdjustedJustify(),
        alignItems: align
      }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * RTL-aware spacing component using logical properties
 */
const RTLSpacing = ({ 
  children, 
  margin = 0, 
  padding = 0,
  className = '',
  ...props 
}) => {
  const { isRTL } = useRTL();
  
  // Convert spacing values to logical properties
  const getLogicalSpacing = (value) => {
    if (typeof value === 'number') {
      return `${value}px`;
    }
    return value;
  };
  
  const marginValue = getLogicalSpacing(margin);
  const paddingValue = getLogicalSpacing(padding);
  
  return (
    <div
      className={`rtl-spacing ${className}`}
      style={{
        marginInlineStart: isRTL ? 'auto' : marginValue,
        marginInlineEnd: isRTL ? marginValue : 'auto',
        paddingInlineStart: isRTL ? paddingValue : paddingValue,
        paddingInlineEnd: isRTL ? paddingValue : paddingValue
      }}
      {...props}
    >
      {children}
    </div>
  );
};

RTLProvider.propTypes = {
  /** Child components */
  children: PropTypes.node.isRequired
};

RTLComponent.propTypes = {
  /** Child components */
  children: PropTypes.node.isRequired,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Additional inline styles */
  style: PropTypes.object,
  /** HTML element type */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType])
};

BidiText.propTypes = {
  /** Text content */
  children: PropTypes.node.isRequired,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Additional inline styles */
  style: PropTypes.object
};

RTLFlex.propTypes = {
  /** Child components */
  children: PropTypes.node.isRequired,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Additional inline styles */
  style: PropTypes.object,
  /** Flex direction */
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  /** Justify content */
  justify: PropTypes.oneOf(['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly']),
  /** Align items */
  align: PropTypes.oneOf(['start', 'end', 'center', 'stretch', 'baseline'])
};

RTLSpacing.propTypes = {
  /** Child components */
  children: PropTypes.node.isRequired,
  /** Margin value */
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Padding value */
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Additional CSS classes */
  className: PropTypes.string
};

export { 
  RTLProvider, 
  useRTL, 
  RTLComponent, 
  BidiText, 
  RTLFlex, 
  RTLSpacing 
};
export default RTLProvider;