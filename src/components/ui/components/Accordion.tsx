import React, { forwardRef, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { AccordionProps, AccordionItemProps } from '../../../types';
import { generateId } from '../../../utils/accessibility';

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(({
  title,
  children,
  isOpen,
  onClick,
  className = '',
  ...props
}, ref) => {
  const contentId = generateId('accordion-content');
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick && onClick();
    }
    // Allow arrow keys to navigate between accordion items
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const focusableElements = document.querySelectorAll('[role="button"][aria-expanded]');
      const currentIndex = Array.from(focusableElements).findIndex(el => el === e.currentTarget);
      if (currentIndex !== -1) {
        const nextIndex = e.key === 'ArrowDown' 
          ? (currentIndex + 1) % focusableElements.length
          : (currentIndex - 1 + focusableElements.length) % focusableElements.length;
        (focusableElements[nextIndex] as HTMLElement).focus();
      }
    }
  };
  
  return (
    <div 
      ref={ref}
      className={`border border-gray-200 dark:border-dark-700 rounded-xl overflow-hidden transition-all duration-300 ${className}`}
      {...props}
    >
      <button
        className="w-full flex justify-between items-center p-6 text-left bg-white dark:bg-dark-800 hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
        onClick={onClick}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={contentId}
        id={`accordion-header-${contentId}`}
      >
        <span className="font-semibold text-gray-900 dark:text-white">{title}</span>
        <HiChevronDown 
          className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          aria-hidden="true"
        />
      </button>
      
      <div 
        id={contentId}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        role="region"
        aria-labelledby={`accordion-header-${contentId}`}
      >
        <div className="p-6 bg-white dark:bg-dark-800 border-t border-gray-100 dark:border-dark-700">
          {children}
        </div>
      </div>
    </div>
  );
});

AccordionItem.displayName = 'AccordionItem';

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(({
  children,
  className = '',
  allowMultiple = false,
  ...props
}, ref) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const handleItemClick = (index: number) => {
    if (allowMultiple) {
      if (openItems.includes(index)) {
        setOpenItems(openItems.filter(item => item !== index));
      } else {
        setOpenItems([...openItems, index]);
      }
    } else {
      setOpenItems(openItems.includes(index) ? [] : [index]);
    }
  };

  const enhancedChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child) && child.type === AccordionItem) {
      return React.cloneElement(child, {
        isOpen: openItems.includes(index),
        onClick: () => handleItemClick(index),
      } as Partial<AccordionItemProps>);
    }
    return child;
  });

  return (
    <div 
      ref={ref}
      className={`space-y-4 ${className}`}
      {...props}
    >
      {enhancedChildren}
    </div>
  );
});

Accordion.displayName = 'Accordion';

export { AccordionItem };
export default Accordion;