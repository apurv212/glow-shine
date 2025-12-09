/**
 * SEO Utility Functions
 * Helper functions for SEO optimization
 */

import { seoConfig, searchVariations } from '@/config/seo.config';

/**
 * Generate meta keywords from multiple sources
 */
export const generateKeywords = (additionalKeywords: string[] = []): string => {
  const allKeywords = [
    ...searchVariations.brand,
    ...searchVariations.owner,
    ...searchVariations.products,
    ...additionalKeywords
  ];
  
  return [...new Set(allKeywords)].join(', ');
};

/**
 * Generate structured data for products
 */
export const generateProductSchema = (product: {
  name: string;
  description: string;
  image?: string;
  price?: number;
  currency?: string;
  availability?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image || seoConfig.ogImage,
    "brand": {
      "@type": "Brand",
      "name": seoConfig.businessName
    },
    "offers": {
      "@type": "Offer",
      "price": product.price || "0",
      "priceCurrency": product.currency || "INR",
      "availability": product.availability || "https://schema.org/InStock",
      "seller": {
        "@type": "Person",
        "name": seoConfig.owner
      }
    }
  };
};

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

/**
 * Generate FAQ structured data
 */
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

/**
 * Generate review/rating structured data
 */
export const generateReviewSchema = (reviews: {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}[]) => {
  return reviews.map(review => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5"
    },
    "reviewBody": review.reviewBody,
    "datePublished": review.datePublished
  }));
};

/**
 * Generate Open Graph image URL
 */
export const getOGImageUrl = (imagePath?: string): string => {
  const baseUrl = seoConfig.siteUrl;
  const image = imagePath || seoConfig.ogImage;
  return image.startsWith('http') ? image : `${baseUrl}${image}`;
};

/**
 * Clean and format URL for canonical tags
 */
export const getCanonicalUrl = (path: string = ''): string => {
  const baseUrl = seoConfig.siteUrl.replace(/\/$/, '');
  const cleanPath = path.replace(/^\//, '');
  return cleanPath ? `${baseUrl}/${cleanPath}` : baseUrl;
};

/**
 * Generate page title with brand name
 */
export const generatePageTitle = (pageTitle?: string): string => {
  if (!pageTitle) return seoConfig.siteName;
  return `${pageTitle} | ${seoConfig.businessName}`;
};

/**
 * Truncate description to SEO-friendly length
 */
export const truncateDescription = (description: string, maxLength: number = 160): string => {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength - 3) + '...';
};

/**
 * Generate social sharing URLs
 */
export const generateSocialShareUrls = (url: string, title: string) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  
  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
  };
};

export default {
  generateKeywords,
  generateProductSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateReviewSchema,
  getOGImageUrl,
  getCanonicalUrl,
  generatePageTitle,
  truncateDescription,
  generateSocialShareUrls
};

