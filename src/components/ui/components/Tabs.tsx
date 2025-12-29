import React, { forwardRef, useState, KeyboardEvent } from 'react';
import { TabsProps, TabProps } from '../../../types';
import { generateId } from '../../../utils/accessibility';

const Tab = forwardRef<HTMLButtonElement, TabProps>(
  (
    {
      label,
      isActive,
      onClick,
      className = '',
      disabled = false,
      id,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'px-6 py-3 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const activeClasses = isActive
      ? 'bg-gradient-primary text-white shadow-lg shadow-primary-500/30'
      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800';

    const disabledClasses = disabled
      ? 'opacity-50 cursor-not-allowed'
      : 'cursor-pointer';

    const tabId = id || generateId('tab');

    return (
      <button
        ref={ref}
        id={tabId}
        className={`${baseClasses} ${activeClasses} ${disabledClasses} ${className}`}
        onClick={onClick}
        disabled={disabled}
        aria-selected={isActive}
        role="tab"
        tabIndex={isActive ? 0 : -1}
        {...props}
      >
        {label}
      </button>
    );
  }
);

Tab.displayName = 'Tab';

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      children,
      className = '',
      defaultActiveTab = 0,
      onTabChange,
      variant = 'default',
      id,
      ...props
    },
    ref
  ) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab);
    const tabsId = id || generateId('tabs');

    const handleTabClick = (index: number) => {
      setActiveTab(index);
      if (onTabChange) {
        onTabChange(index);
      }
    };

    const handleKeyDown = (event: KeyboardEvent, _index: number) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          setActiveTab(prev => Math.max(0, prev - 1));
          break;
        case 'ArrowRight':
          event.preventDefault();
          setActiveTab(prev =>
            Math.min(React.Children.count(children) - 1, prev + 1)
          );
          break;
        case 'Home':
          event.preventDefault();
          setActiveTab(0);
          break;
        case 'End':
          event.preventDefault();
          setActiveTab(React.Children.count(children) - 1);
          break;
        default:
          break;
      }
    };

    const enhancedChildren = React.Children.map(children, (child, index) => {
      if (React.isValidElement(child) && child.type === Tab) {
        return React.cloneElement(child, {
          isActive: activeTab === index,
          onClick: () => handleTabClick(index),
          onKeyDown: (e: KeyboardEvent) => handleKeyDown(e, index),
        } as Partial<TabProps>);
      }
      return child;
    });

    const tabsContainerClasses =
      variant === 'pill'
        ? 'inline-flex p-1 bg-gray-100 dark:bg-dark-800 rounded-xl'
        : 'flex border-b border-gray-200 dark:border-dark-700';

    return (
      <div ref={ref} id={tabsId} className={className} {...props}>
        <div
          className={tabsContainerClasses}
          role="tablist"
          aria-orientation="horizontal"
        >
          {enhancedChildren}
        </div>
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';

export { Tab };
export default Tabs;
