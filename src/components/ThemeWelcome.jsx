import { useState, useEffect } from 'react';
import { HiSun, HiMoon, HiSparkles, HiX } from 'react-icons/hi';
import { useApp } from '../context/AppContext';

const ThemeWelcome = () => {
  const { theme, changeTheme } = useApp();
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if welcome message has been shown before
    const welcomeShown = localStorage.getItem('themeWelcomeShown');

    if (!welcomeShown) {
      // Show popup after 1 second delay
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasShown(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('themeWelcomeShown', 'true');
  };

  const handleThemeSelect = (selectedTheme) => {
    changeTheme(selectedTheme);
    handleClose();
  };

  const getThemeIcon = (themeName) => {
    if (themeName === 'dark') return <HiMoon className="w-6 h-6" />;
    if (themeName === 'light') return <HiSun className="w-6 h-6" />;
    return <HiSparkles className="w-6 h-6" />;
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] animate-fade-in"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-md mx-4 animate-scale-in">
        <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-700 overflow-hidden">
          {/* Header */}
          <div className="relative bg-gradient-to-br from-primary-500 to-secondary-500 p-6 text-white">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <HiX className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 mb-2">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <HiSparkles className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Welcome!</h2>
                <p className="text-sm text-white/90">Limitless Infotech Solution</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Choose Your Preferred Theme
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Select a theme that suits your preference. You can change it anytime from the navigation bar.
            </p>

            {/* Theme Options */}
            <div className="space-y-3">
              {/* Light Theme */}
              <button
                onClick={() => handleThemeSelect('light')}
                className={`w-full flex items-center space-x-4 p-4 rounded-xl border-2 transition-all duration-300 ${
                  theme === 'light'
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-gray-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-600 bg-white dark:bg-dark-700'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  theme === 'light'
                    ? 'bg-yellow-100 text-yellow-600'
                    : 'bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-400'
                }`}>
                  <HiSun className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold text-gray-900 dark:text-white">Light Mode</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Bright and clean interface</p>
                </div>
                {theme === 'light' && (
                  <div className="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </button>

              {/* Dark Theme */}
              <button
                onClick={() => handleThemeSelect('dark')}
                className={`w-full flex items-center space-x-4 p-4 rounded-xl border-2 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-gray-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-600 bg-white dark:bg-dark-700'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  theme === 'dark'
                    ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400'
                    : 'bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-400'
                }`}>
                  <HiMoon className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold text-gray-900 dark:text-white">Dark Mode</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Easy on the eyes</p>
                </div>
                {theme === 'dark' && (
                  <div className="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </button>

              {/* System Theme */}
              <button
                onClick={() => handleThemeSelect('system')}
                className={`w-full flex items-center space-x-4 p-4 rounded-xl border-2 transition-all duration-300 ${
                  theme === 'system'
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-gray-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-600 bg-white dark:bg-dark-700'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  theme === 'system'
                    ? 'bg-gradient-to-br from-primary-100 to-secondary-100 text-primary-600 dark:from-primary-900/30 dark:to-secondary-900/30 dark:text-primary-400'
                    : 'bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-400'
                }`}>
                  <HiSparkles className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold text-gray-900 dark:text-white">System Default</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Matches your device settings</p>
                </div>
                {theme === 'system' && (
                  <div className="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </button>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-dark-700">
              <button
                onClick={handleClose}
                className="w-full py-3 px-4 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Continue to Website
              </button>
              <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-3">
                You can change the theme anytime from the top navigation bar
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeWelcome;
