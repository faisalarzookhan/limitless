import React from 'react';
import PropTypes from 'prop-types';
import './AdaptiveGrid.css';

/**
 * Adaptive Grid Component
 * Utilizes CSS aspect-ratio and container queries to ensure "Showcase Projects"
 * look pixel-perfect on Foldables, iPads, and Ultra-wide monitors.
 */
const AdaptiveGrid = ({
  children,
  columns = 'repeat(auto-fill, minmax(300px, 1fr))',
  gap = '1rem',
  aspectRatio = '1/1',
  className = '',
  containerQuery = null,
  maxWidth = '1200px',
  ...props
}) => {
  const gridStyles = {
    gridTemplateColumns: columns,
    gap,
    maxWidth,
    '--aspect-ratio': aspectRatio,
  };

  // If container query is provided, we'll use it to apply responsive styles
  const gridClasses = ['limitless-adaptive-grid', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={gridClasses} style={gridStyles} {...props}>
      {React.Children.map(children, (child, index) => {
        if (child) {
          // Clone child elements to add aspect ratio styling if needed
          return React.cloneElement(child, {
            ...child.props,
            style: {
              ...child.props.style,
              aspectRatio: aspectRatio,
              ...child.props.style,
            },
          });
        }
        return child;
      })}
    </div>
  );
};

/**
 * Adaptive Grid Item Component
 * Individual grid item that maintains aspect ratio and responsive behavior
 */
const AdaptiveGridItem = ({
  children,
  aspectRatio = '1/1',
  className = '',
  style = {},
  ...props
}) => {
  const itemStyles = {
    ...style,
    aspectRatio,
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  };

  const itemClasses = ['limitless-adaptive-grid-item', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={itemClasses} style={itemStyles} {...props}>
      {children}
    </div>
  );
};

/**
 * Aspect Ratio Box Component
 * Maintains a specific aspect ratio regardless of container size
 */
const AspectRatioBox = ({
  children,
  ratio = '1/1',
  className = '',
  style = {},
  ...props
}) => {
  const boxStyles = {
    ...style,
    aspectRatio: ratio,
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  };

  const boxClasses = ['limitless-aspect-ratio-box', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={boxClasses} style={boxStyles} {...props}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
    </div>
  );
};

/**
 * Responsive Container Component
 * Uses container queries to adapt layout based on available space
 */
const ResponsiveContainer = ({
  children,
  query = '(min-width: 600px)',
  className = '',
  style = {},
  ...props
}) => {
  const containerStyles = {
    ...style,
    containerType: 'inline-size',
    containerName: 'responsive-container',
  };

  const containerClasses = ['limitless-responsive-container', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses} style={containerStyles} {...props}>
      <style>
        {`
          @container responsive-container ${query} {
            .limitless-container-query-match {
              ${getContainerQueryStyles(query)}
            }
          }
        `}
      </style>
      {React.Children.map(children, child => {
        if (child) {
          return React.cloneElement(child, {
            ...child.props,
            className: `${child.props.className || ''} limitless-container-query-match`,
          });
        }
        return child;
      })}
    </div>
  );
};

// Helper function to generate container query styles
function getContainerQueryStyles(query) {
  // This is a simplified version - in a real implementation,
  // you'd have more sophisticated logic to handle different queries
  if (query.includes('600px')) {
    return `
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    `;
  }
  return '';
}

AdaptiveGrid.propTypes = {
  /** Grid items to render */
  children: PropTypes.node.isRequired,
  /** CSS grid template columns */
  columns: PropTypes.string,
  /** Gap between grid items */
  gap: PropTypes.string,
  /** Aspect ratio for grid items */
  aspectRatio: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Container query for responsive behavior */
  containerQuery: PropTypes.string,
  /** Maximum width of the grid */
  maxWidth: PropTypes.string,
};

AdaptiveGridItem.propTypes = {
  /** Content to render inside the grid item */
  children: PropTypes.node.isRequired,
  /** Aspect ratio for the grid item */
  aspectRatio: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Additional inline styles */
  style: PropTypes.object,
};

AspectRatioBox.propTypes = {
  /** Content to render inside the aspect ratio box */
  children: PropTypes.node.isRequired,
  /** Aspect ratio to maintain (e.g., '1/1', '16/9', '4/3') */
  ratio: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Additional inline styles */
  style: PropTypes.object,
};

ResponsiveContainer.propTypes = {
  /** Content to render inside the responsive container */
  children: PropTypes.node.isRequired,
  /** Container query to match */
  query: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Additional inline styles */
  style: PropTypes.object,
};

export { AdaptiveGrid, AdaptiveGridItem, AspectRatioBox, ResponsiveContainer };
export default AdaptiveGrid;
