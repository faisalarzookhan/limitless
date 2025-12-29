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
  image?: string | null;
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
  children?: React.ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'ghost'
    | 'danger'
    | 'success';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export interface AccordionProps {
  children: React.ReactNode;
  className?: string;
  allowMultiple?: boolean;
}

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
  className?: string;
}

export interface TabsProps {
  children: React.ReactNode;
  className?: string;
  defaultActiveTab?: number;
  onTabChange?: (index: number) => void;
  variant?: 'default' | 'pill';
  id?: string;
}

export interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  id?: string;
}

export interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
  variant?: 'default' | 'success' | 'warning' | 'danger';
  showPercentage?: boolean;
  label?: string;
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
  blurDataURL?: string;
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
  onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
}

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'filled' | 'gradient';
  className?: string;
  hoverable?: boolean;
  clickable?: boolean;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'default' | 'filled' | 'outlined';
  className?: string;
  icon?: React.ReactNode;
}

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  variant?: 'default' | 'filled' | 'outlined';
  className?: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  variant?: 'default' | 'filled' | 'outlined';
  className?: string;
  children: React.ReactNode;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  delay?: number;
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

// UI Component Props
export interface SkeletonProps {
  className?: string;
  variant?: 'rectangular' | 'circular' | 'text';
  width?: number;
  height?: number;
  borderRadius?: number;
  animation?: 'pulse' | 'wave' | 'none';
}

export interface DividerProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted';
  thickness?: number;
  color?: 'gray' | 'primary' | 'secondary' | 'accent';
  textAlign?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
}

export interface NotificationProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  onClose?: () => void;
  duration?: number;
  className?: string;
  closable?: boolean;
}
