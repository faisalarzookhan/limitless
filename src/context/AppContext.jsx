import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Theme Management
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = selectedTheme => {
    const root = window.document.documentElement;

    if (selectedTheme === 'system') {
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
      root.classList.remove('light', 'dark');
      root.classList.add(systemPreference);
    } else {
      root.classList.remove('light', 'dark');
      root.classList.add(selectedTheme);
    }
  };

  const changeTheme = newTheme => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  // Notification Management
  const addNotification = notification => {
    const id = Date.now();
    const newNotification = {
      id,
      type: 'info',
      duration: 5000,
      ...notification,
    };

    setNotifications(prev => [...prev, newNotification]);

    if (newNotification.duration) {
      setTimeout(() => {
        removeNotification(id);
      }, newNotification.duration);
    }
  };

  const removeNotification = id => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const showSuccess = (message, title = 'Success') => {
    addNotification({ type: 'success', message, title });
  };

  const showError = (message, title = 'Error') => {
    addNotification({ type: 'error', message, title });
  };

  const showWarning = (message, title = 'Warning') => {
    addNotification({ type: 'warning', message, title });
  };

  const showInfo = (message, title = 'Info') => {
    addNotification({ type: 'info', message, title });
  };

  // Cart Management
  const addToCart = item => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    showSuccess('Added to cart');
  };

  const removeFromCart = itemId => {
    setCart(prev => prev.filter(i => i.id !== itemId));
    showSuccess('Removed from cart');
  };

  const updateCartQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(prev => prev.map(i => (i.id === itemId ? { ...i, quantity } : i)));
  };

  const clearCart = () => {
    setCart([]);
    showSuccess('Cart cleared');
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Wishlist Management
  const addToWishlist = item => {
    setWishlist(prev => {
      if (prev.find(i => i.id === item.id)) {
        showWarning('Already in wishlist');
        return prev;
      }
      showSuccess('Added to wishlist');
      return [...prev, item];
    });
  };

  const removeFromWishlist = itemId => {
    setWishlist(prev => prev.filter(i => i.id !== itemId));
    showSuccess('Removed from wishlist');
  };

  const isInWishlist = itemId => {
    return wishlist.some(i => i.id === itemId);
  };

  // User Management (for future authentication)
  const login = userData => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    showSuccess(`Welcome back, ${userData.name}!`);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    clearCart();
    showInfo('Logged out successfully');
  };

  const updateUser = updates => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    showSuccess('Profile updated');
  };

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Failed to parse user data:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  // Global Loading State
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  const value = {
    // Theme
    theme,
    changeTheme,

    // User
    user,
    login,
    logout,
    updateUser,
    isAuthenticated: !!user,

    // Loading
    loading,
    startLoading,
    stopLoading,

    // Notifications
    notifications,
    addNotification,
    removeNotification,
    showSuccess,
    showError,
    showWarning,
    showInfo,

    // Cart
    cart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    cartTotal,
    cartItemCount,

    // Wishlist
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
