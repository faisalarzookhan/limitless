import React from 'react';
import {
  // Core icons
  Activity,
  Award,
  BarChart3,
  Bell,
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Circle,
  Clock,
  Code,
  Database,
  Eye,
  EyeOff,
  FileText,
  Filter,
  Flag,
  Folder,
  Globe,
  Heart,
  Home,
  Image,
  Key,
  Layers,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Package,
  Phone,
  Search,
  Settings,
  Shield,
  Star,
  Tag,
  Target,
  ThumbsUp,
  TrendingUp,
  User,
  Users,
  X,
  Zap,
  // Brand specific icons
  Chrome,
  Github,
  Mail as MailIcon,
  Twitter,
  Youtube,
} from 'lucide-react';
import PropTypes from 'prop-types';

/**
 * Limitless Icon Component
 * Uses Lucide-React icons with Royal Gold and Deep Blue theme
 */
const LimitlessIcon = ({
  icon = 'Circle',
  size = 24,
  color = '#1e3a8a', // Deep blue as default
  strokeWidth = 2,
  className = '',
  fill = 'none',
  ...props
}) => {
  // Map icon names to Lucide components
  const iconComponents = {
    activity: Activity,
    award: Award,
    barChart: BarChart3,
    bell: Bell,
    bookOpen: BookOpen,
    briefcase: Briefcase,
    calendar: Calendar,
    checkCircle: CheckCircle,
    chevronDown: ChevronDown,
    chevronRight: ChevronRight,
    chevronUp: ChevronUp,
    circle: Circle,
    clock: Clock,
    code: Code,
    database: Database,
    eye: Eye,
    eyeOff: EyeOff,
    fileText: FileText,
    filter: Filter,
    flag: Flag,
    folder: Folder,
    globe: Globe,
    heart: Heart,
    home: Home,
    image: Image,
    key: Key,
    layers: Layers,
    lock: Lock,
    mail: Mail,
    mapPin: MapPin,
    menu: Menu,
    message: MessageCircle,
    package: Package,
    phone: Phone,
    search: Search,
    settings: Settings,
    shield: Shield,
    star: Star,
    tag: Tag,
    target: Target,
    thumbsUp: ThumbsUp,
    trendingUp: TrendingUp,
    user: User,
    users: Users,
    x: X,
    zap: Zap,
    chrome: Chrome,
    github: Github,
    mailIcon: MailIcon,
    twitter: Twitter,
    youtube: Youtube,
  };

  const SelectedIcon = iconComponents[icon.toLowerCase()] || Circle;

  // Royal Gold color options
  const royalGoldColors = {
    gold: '#d4af37',
    deepBlue: '#1e3a8a',
    lightBlue: '#3b82f6',
    dark: '#1f2937',
    light: '#f9fafb',
  };

  // Allow color customization or use theme colors
  const iconColor = royalGoldColors[color] || color;

  const iconClasses = ['limitless-icon', className].filter(Boolean).join(' ');

  return (
    <SelectedIcon
      size={size}
      color={iconColor}
      strokeWidth={strokeWidth}
      fill={fill}
      className={iconClasses}
      {...props}
    />
  );
};

/**
 * Royal Gold themed icon set component
 * Provides a collection of commonly used icons with the Royal Gold theme
 */
const RoyalGoldIconSet = ({ size = 24, className = '' }) => {
  const royalGoldColor = '#d4af37'; // Royal Gold
  const deepBlueColor = '#1e3a8a'; // Deep Blue

  const icons = [
    { name: 'target', color: royalGoldColor },
    { name: 'award', color: royalGoldColor },
    { name: 'star', color: royalGoldColor },
    { name: 'shield', color: deepBlueColor },
    { name: 'lock', color: deepBlueColor },
    { name: 'zap', color: royalGoldColor },
    { name: 'trendingUp', color: royalGoldColor },
    { name: 'barChart', color: deepBlueColor },
  ];

  return (
    <div className={`royal-gold-icon-set ${className}`}>
      {icons.map((icon, index) => (
        <LimitlessIcon
          key={index}
          icon={icon.name}
          size={size}
          color={icon.color}
          className="royal-gold-icon"
        />
      ))}
    </div>
  );
};

/**
 * Icon Button Component
 * Combines an icon with button functionality
 */
const IconButton = ({
  icon,
  onClick,
  size = 24,
  color = '#1e3a8a',
  variant = 'default',
  disabled = false,
  className = '',
  title = '',
  ...props
}) => {
  const buttonClasses = [
    'limitless-icon-button',
    `icon-button-${variant}`,
    disabled ? 'icon-button-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const royalGoldColors = {
    gold: '#d4af37',
    deepBlue: '#1e3a8a',
    lightBlue: '#3b82f6',
    dark: '#1f2937',
    light: '#f9fafb',
  };

  const iconColor = royalGoldColors[color] || color;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      title={title}
      style={{
        background: 'none',
        border: 'none',
        padding: '0.5rem',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={e =>
        !disabled && (e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.05)')
      }
      onMouseLeave={e => (e.target.style.backgroundColor = 'transparent')}
      {...props}
    >
      <LimitlessIcon
        icon={icon}
        size={size}
        color={iconColor}
        style={{ display: 'block' }}
      />
    </button>
  );
};

LimitlessIcon.propTypes = {
  /** Icon name to display */
  icon: PropTypes.string,
  /** Size of the icon */
  size: PropTypes.number,
  /** Color of the icon */
  color: PropTypes.string,
  /** Stroke width of the icon */
  strokeWidth: PropTypes.number,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Fill color (if any) */
  fill: PropTypes.string,
};

RoyalGoldIconSet.propTypes = {
  /** Size of the icons */
  size: PropTypes.number,
  /** Additional CSS classes */
  className: PropTypes.string,
};

IconButton.propTypes = {
  /** Icon name to display */
  icon: PropTypes.string.isRequired,
  /** Click handler */
  onClick: PropTypes.func,
  /** Size of the icon */
  size: PropTypes.number,
  /** Color of the icon */
  color: PropTypes.string,
  /** Button variant */
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'gold']),
  /** Whether the button is disabled */
  disabled: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Title attribute for accessibility */
  title: PropTypes.string,
};

export { LimitlessIcon, RoyalGoldIconSet, IconButton };
export default LimitlessIcon;
