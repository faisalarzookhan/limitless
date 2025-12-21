// Theme types
export type Theme = 'light' | 'dark' | 'system';

// Product types
export interface Product {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  popular?: boolean;
  badge?: string;
  users?: string;
  link?: string;
}

// Service types
export interface Service {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
}

// Testimonial types
export interface Testimonial {
  name: string;
  role: string;
  image?: string;
  rating: number;
  text: string;
}

// Notification types
export interface Notification {
  id: number;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  title?: string;
  duration?: number;
}

// Cart item types
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

// User types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

// Context types
export interface AppContextType {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  isAuthenticated: boolean;
  loading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: number) => void;
  showSuccess: (message: string, title?: string) => void;
  showError: (message: string, title?: string) => void;
  showWarning: (message: string, title?: string) => void;
  showInfo: (message: string, title?: string) => void;
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (itemId: string) => void;
  updateCartQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartItemCount: number;
  wishlist: CartItem[];
  addToWishlist: (item: CartItem) => void;
  removeFromWishlist: (itemId: string) => void;
  isInWishlist: (itemId: string) => boolean;
}

// Component prop types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

// Navigation types
export interface NavItem {
  name: string;
  path: string;
  hasDropdown?: boolean;
  dropdownType?: 'products' | 'services';
}

// Success story types
export interface SuccessStory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  results: Array<{
    label: string;
    value: string;
  }>;
  link: string;
  color: string;
}

// FAQ types
export interface FAQ {
  question: string;
  answer: string;
}

// Why Limitless item types
export interface WhyLimitlessItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}
