import { useEffect } from 'react';

const SEO = ({ 
  title, 
  description, 
  keywords,
  canonical,
  ogImage,
  type = 'website',
  structuredData
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update or create meta tags
    const updateMetaTag = (name, content, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Update description
    if (description) {
      updateMetaTag('description', description);
      updateMetaTag('og:description', description, 'property');
      updateMetaTag('twitter:description', description);
    }

    // Update keywords
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Update Open Graph tags
    if (title) {
      updateMetaTag('og:title', title, 'property');
      updateMetaTag('twitter:title', title);
    }

    if (ogImage) {
      updateMetaTag('og:image', ogImage, 'property');
      updateMetaTag('twitter:image', ogImage);
    }

    // Update canonical URL
    if (canonical) {
      let link = document.querySelector("link[rel='canonical']");
      if (link) {
        link.setAttribute('href', canonical);
      } else {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', canonical);
        document.head.appendChild(link);
      }
    }

    // Add structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (script) {
        script.textContent = JSON.stringify(structuredData);
      } else {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }
  }, [title, description, keywords, canonical, ogImage, type, structuredData]);

  return null;
};

export default SEO;

