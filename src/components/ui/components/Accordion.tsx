import React, { forwardRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AccordionProps, AccordionItemProps } from '../../../types';
import { generateId } from '../../../utils/accessibility';

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ title, children, isOpen, onClick, className = '', ...props }, ref) => {
    const contentId = generateId('accordion-content');

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick && onClick();
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const focusableElements = document.querySelectorAll(
          '[role="button"][aria-expanded]'
        );
        const currentIndex = Array.from(focusableElements).findIndex(
          el => el === e.currentTarget
        );
        if (currentIndex !== -1) {
          const nextIndex =
            e.key === 'ArrowDown'
              ? (currentIndex + 1) % focusableElements.length
              : (currentIndex - 1 + focusableElements.length) %
                focusableElements.length;
          (focusableElements[nextIndex] as HTMLElement).focus();
        }
      }
    };

    return (
      <div
        ref={ref}
        className={`bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 hover:bg-white/10 ${className}`}
        {...props}
      >
        <button
          className="w-full flex justify-between items-center p-8 text-left transition-all duration-500 focus:outline-none"
          onClick={onClick}
          onKeyDown={handleKeyDown}
          aria-expanded={isOpen}
          aria-controls={contentId}
          id={`accordion-header-${contentId}`}
        >
          <span className="text-[0.7rem] font-black text-white uppercase tracking-[0.3em]">
            {title}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-white/20 transition-transform duration-500 ${isOpen ? 'rotate-180 text-[#1ba6d6]' : ''}`}
            aria-hidden="true"
          />
        </button>

        <div
          id={contentId}
          className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
          role="region"
          aria-labelledby={`accordion-header-${contentId}`}
        >
          <div className="p-8 bg-white/5 border-t border-white/5 text-[0.65rem] font-black uppercase tracking-widest text-white/40 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';


const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className = '', allowMultiple = false, ...props }, ref) => {
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
      <div ref={ref} className={`space-y-4 ${className}`} {...props}>
        {enhancedChildren}
      </div>
    );
  }
);

Accordion.displayName = 'Accordion';

export { AccordionItem };
export default Accordion;
