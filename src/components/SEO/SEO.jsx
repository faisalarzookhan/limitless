import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage, 
  ogType = 'website',
  twitterHandle = '@limitless',
  schemaData
}) => {
  const siteTitle = 'Limitless Infotech Solution';
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Innovation Meets Execution`;
  const defaultDescription = 'Limitless Infotech Solution provides custom software development, mobile apps, and cloud solutions for startups and enterprises. Empowering innovation through execution.';
  const defaultKeywords = 'software development, mobile apps, cloud computing, AI solutions, Limitless Infotech, Faisal Khan, custom web design';

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Limitless Infotech Solution",
    "url": "https://limitlessinfotech.com",
    "logo": "https://limitlessinfotech.com/logo.png",
    "sameAs": [
      "https://linkedin.com/company/limitlessinfotech",
      "https://github.com/faisalarzookhan/limitless"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+917710909492",
      "contactType": "customer service",
      "email": "info@limitlessinfotech.com"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteTitle,
    "url": "https://limitlessinfotech.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://limitlessinfotech.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = title ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://limitlessinfotech.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": canonical || window.location.href
      }
    ]
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage || 'https://limitlessinfotech.com/og-image.jpg'} />
      <meta property="og:url" content={canonical || window.location.href} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || 'https://limitlessinfotech.com/og-image.jpg'} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      {breadcrumbSchema && <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>}
      
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
