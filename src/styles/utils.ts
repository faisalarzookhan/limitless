// Utility functions for consistent styling
import { designSystem } from './tokens';

// Helper function to get color values
export const getColor = (colorPath: string): string => {
  const paths = colorPath.split('.');
  let current: any = designSystem.colors;

  for (const path of paths) {
    if (current[path] === undefined) {
      return '';
    }
    current = current[path];
  }

  return current;
};

// Helper function to get spacing values
export const getSpacing = (size: string | number): string => {
  if (typeof size === 'number') {
    return `${size * 4}px`;
  }

  return (
    designSystem.spacing[size as keyof typeof designSystem.spacing] || size
  );
};

// Helper function to get font size values
export const getFontSize = (size: string): string => {
  return (
    designSystem.typography.fontSize[
      size as keyof typeof designSystem.typography.fontSize
    ] || size
  );
};

// Helper function to get font family values
export const getFontFamily = (family: string): string => {
  const fontFamily =
    designSystem.typography.fontFamily[
      family as keyof typeof designSystem.typography.fontFamily
    ];
  return Array.isArray(fontFamily)
    ? fontFamily.join(', ')
    : fontFamily || family;
};

// Helper function to get border radius values
export const getBorderRadius = (radius: string): string => {
  return (
    designSystem.borderRadius[
      radius as keyof typeof designSystem.borderRadius
    ] || radius
  );
};

// Helper function to get box shadow values
export const getBoxShadow = (shadow: string): string => {
  return (
    designSystem.boxShadow[shadow as keyof typeof designSystem.boxShadow] ||
    shadow
  );
};

// Helper function to get z-index values
export const getZIndex = (index: string | number): string => {
  if (typeof index === 'number') {
    return index.toString();
  }

  return (
    designSystem.zIndex[index as keyof typeof designSystem.zIndex] || index
  );
};

// Helper function to get breakpoint values
export const getBreakpoint = (breakpoint: string): string => {
  return (
    designSystem.breakpoints[
      breakpoint as keyof typeof designSystem.breakpoints
    ] || breakpoint
  );
};

// Helper function to get transition values
export const getTransition = (
  duration: string,
  easing: string = 'default'
): string => {
  const durationValue =
    designSystem.transitions.duration[
      duration as keyof typeof designSystem.transitions.duration
    ] || duration;
  const easingValue =
    designSystem.transitions.easing[
      easing as keyof typeof designSystem.transitions.easing
    ] || easing;
  return `${durationValue} ${easingValue}`;
};

// Helper function to get gradient values
export const getGradient = (gradient: string): string => {
  return (
    designSystem.gradients[gradient as keyof typeof designSystem.gradients] ||
    gradient
  );
};

// Utility function to generate responsive classes
export const responsiveClasses = (
  baseClass: string,
  smClass?: string,
  mdClass?: string,
  lgClass?: string,
  xlClass?: string
): string => {
  const classes = [baseClass];

  if (smClass) classes.push(`sm:${smClass}`);
  if (mdClass) classes.push(`md:${mdClass}`);
  if (lgClass) classes.push(`lg:${lgClass}`);
  if (xlClass) classes.push(`xl:${xlClass}`);

  return classes.join(' ');
};

// Utility function to generate color classes
export const colorClasses = (
  property: 'bg' | 'text' | 'border',
  color: string,
  darkColor?: string
): string => {
  const baseClass = `${property}-${color}`;

  if (darkColor) {
    return `${baseClass} dark:${property}-${darkColor}`;
  }

  return baseClass;
};

// Utility function to generate gradient classes
export const gradientClasses = (
  direction:
    | 'to-r'
    | 'to-l'
    | 'to-t'
    | 'to-b'
    | 'to-tr'
    | 'to-tl'
    | 'to-br'
    | 'to-bl',
  fromColor: string,
  toColor: string
): string => {
  return `bg-gradient-${direction} from-${fromColor} to-${toColor}`;
};

// Utility function to generate shadow classes
export const shadowClasses = (shadow: string, darkShadow?: string): string => {
  const baseClass = `shadow-${shadow}`;

  if (darkShadow) {
    return `${baseClass} dark:shadow-${darkShadow}`;
  }

  return baseClass;
};

// Utility function to generate rounded classes
export const roundedClasses = (radius: string): string => {
  return `rounded-${radius}`;
};

// Utility function to generate padding classes
export const paddingClasses = (
  all?: string,
  x?: string,
  y?: string,
  top?: string,
  right?: string,
  bottom?: string,
  left?: string
): string => {
  const classes: string[] = [];

  if (all) classes.push(`p-${all}`);
  if (x) classes.push(`px-${x}`);
  if (y) classes.push(`py-${y}`);
  if (top) classes.push(`pt-${top}`);
  if (right) classes.push(`pr-${right}`);
  if (bottom) classes.push(`pb-${bottom}`);
  if (left) classes.push(`pl-${left}`);

  return classes.join(' ');
};

// Utility function to generate margin classes
export const marginClasses = (
  all?: string,
  x?: string,
  y?: string,
  top?: string,
  right?: string,
  bottom?: string,
  left?: string
): string => {
  const classes: string[] = [];

  if (all) classes.push(`m-${all}`);
  if (x) classes.push(`mx-${x}`);
  if (y) classes.push(`my-${y}`);
  if (top) classes.push(`mt-${top}`);
  if (right) classes.push(`mr-${right}`);
  if (bottom) classes.push(`mb-${bottom}`);
  if (left) classes.push(`ml-${left}`);

  return classes.join(' ');
};

// Utility function to generate flex classes
export const flexClasses = (
  direction: 'row' | 'col' | 'row-reverse' | 'col-reverse' = 'row',
  wrap: 'wrap' | 'nowrap' | 'wrap-reverse' = 'nowrap',
  justifyContent:
    | 'start'
    | 'center'
    | 'end'
    | 'between'
    | 'around'
    | 'evenly' = 'start',
  alignItems: 'start' | 'center' | 'end' | 'baseline' | 'stretch' = 'start'
): string => {
  return `flex flex-${direction} flex-${wrap} justify-${justifyContent} items-${alignItems}`;
};

// Utility function to generate grid classes
export const gridClasses = (cols?: number | string, gap?: string): string => {
  const classes: string[] = ['grid'];

  if (cols) {
    if (typeof cols === 'number') {
      classes.push(`grid-cols-${cols}`);
    } else {
      classes.push(`grid-cols-${cols}`);
    }
  }

  if (gap) classes.push(`gap-${gap}`);

  return classes.join(' ');
};

// Utility function to generate typography classes
export const typographyClasses = (
  fontSize: string,
  fontWeight?: string,
  textAlign: 'left' | 'center' | 'right' = 'left',
  lineHeight?: string
): string => {
  const classes = [`text-${fontSize}`];

  if (fontWeight) classes.push(`font-${fontWeight}`);
  if (textAlign) classes.push(`text-${textAlign}`);
  if (lineHeight) classes.push(`leading-${lineHeight}`);

  return classes.join(' ');
};

// Export all utilities as a single object
export const styleUtils = {
  getColor,
  getSpacing,
  getFontSize,
  getFontFamily,
  getBorderRadius,
  getBoxShadow,
  getZIndex,
  getBreakpoint,
  getTransition,
  getGradient,
  responsiveClasses,
  colorClasses,
  gradientClasses,
  shadowClasses,
  roundedClasses,
  paddingClasses,
  marginClasses,
  flexClasses,
  gridClasses,
  typographyClasses,
};

export default styleUtils;
