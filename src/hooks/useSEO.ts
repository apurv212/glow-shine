import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoConfig } from '@/config/seo.config';
import { getCanonicalUrl, generatePageTitle } from '@/utils/seo.utils';

interface UseSEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noindex?: boolean;
}

/**
 * Custom hook for managing SEO meta tags
 * Automatically updates meta tags when component mounts
 */
export const useSEO = ({
  title,
  description,
  keywords = [],
  image,
  noindex = false
}: UseSEOProps = {}) => {
  const location = useLocation();

  useEffect(() => {
    // Update title
    if (title) {
      document.title = generatePageTitle(title);
    }

    // Update description
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }

    // Update keywords
    if (keywords.length > 0) {
      const allKeywords = [...seoConfig.primaryKeywords, ...keywords].join(', ');
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', allKeywords);
      }
    }

    // Update canonical URL
    const canonicalUrl = getCanonicalUrl(location.pathname);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    }

    // Update robots meta
    if (noindex) {
      const robots = document.querySelector('meta[name="robots"]');
      if (robots) {
        robots.setAttribute('content', 'noindex, nofollow');
      }
    }

    // Update OG tags
    if (title) {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', generatePageTitle(title));
      }
    }

    if (description) {
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', description);
      }
    }

    if (image) {
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute('content', image);
      }
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    }

  }, [title, description, keywords, image, noindex, location.pathname]);

  return {
    updateTitle: (newTitle: string) => {
      document.title = generatePageTitle(newTitle);
    },
    updateDescription: (newDescription: string) => {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', newDescription);
      }
    }
  };
};

export default useSEO;

