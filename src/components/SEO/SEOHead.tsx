import { useEffect } from 'react';
import { seoConfig } from '@/config/seo.config';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'product' | 'article';
  structuredData?: object;
}

/**
 * SEO Component for dynamic meta tags
 * Handles all SEO requirements including Open Graph, Twitter Cards, and Structured Data
 */
export const SEOHead = ({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  structuredData
}: SEOHeadProps) => {
  
  const pageTitle = title 
    ? `${title} | ${seoConfig.businessName}` 
    : seoConfig.siteName;
  
  const pageDescription = description || seoConfig.siteDescription;
  const pageImage = image || seoConfig.ogImage;
  const pageUrl = url || seoConfig.siteUrl;
  
  // Combine default keywords with page-specific keywords
  const allKeywords = [
    ...seoConfig.primaryKeywords,
    ...keywords
  ].join(', ');

  useEffect(() => {
    // Update document title
    document.title = pageTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic Meta Tags
    updateMetaTag('description', pageDescription);
    updateMetaTag('keywords', allKeywords);
    updateMetaTag('author', seoConfig.owner);
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    
    // Open Graph Meta Tags
    updateMetaTag('og:title', pageTitle, true);
    updateMetaTag('og:description', pageDescription, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', pageUrl, true);
    updateMetaTag('og:image', pageImage, true);
    updateMetaTag('og:site_name', seoConfig.businessName, true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter Card Meta Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', pageTitle);
    updateMetaTag('twitter:description', pageDescription);
    updateMetaTag('twitter:image', pageImage);
    updateMetaTag('twitter:creator', `@${seoConfig.businessName.replace(/\s+/g, '')}`);

    // Additional SEO Tags
    updateMetaTag('application-name', seoConfig.businessName);
    updateMetaTag('apple-mobile-web-app-title', seoConfig.businessName);
    updateMetaTag('format-detection', 'telephone=no');
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('theme-color', '#ffffff');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);

    // Structured Data (JSON-LD)
    const jsonLdData = structuredData || seoConfig.structuredData;
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    
    scriptTag.textContent = JSON.stringify(jsonLdData);

  }, [pageTitle, pageDescription, pageImage, pageUrl, allKeywords, type, structuredData]);

  return null;
};

export default SEOHead;

