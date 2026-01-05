import React from 'react';
import { Helmet } from 'react-helmet';
import { ResponsiveToolkitDemo } from '../components/ui/ResponsiveToolkit';
import ErrorBoundary from '../components/ErrorBoundary';

const ResponsiveToolkitDemoPage = () => {
  return (
    <ErrorBoundary>
      <Helmet>
        <title>Responsive Toolkit Demo | Auralis AI</title>
        <meta name="description" content="Interactive demo of the responsive toolkit component that automatically adjusts to match parent container dimensions" />
      </Helmet>
      <ResponsiveToolkitDemo />
    </ErrorBoundary>
  );
};

export default ResponsiveToolkitDemoPage;