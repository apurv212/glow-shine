import { useEffect } from 'react';
import { generateProductSchema } from '@/utils/seo.utils';

interface ProductSchemaProps {
  name: string;
  description: string;
  image?: string;
  price?: number;
  currency?: string;
  availability?: string;
}

/**
 * Product Schema Component
 * Adds structured data for individual products
 */
export const ProductSchema = ({
  name,
  description,
  image,
  price,
  currency = 'INR',
  availability = 'https://schema.org/InStock'
}: ProductSchemaProps) => {
  
  useEffect(() => {
    const schema = generateProductSchema({
      name,
      description,
      image,
      price,
      currency,
      availability
    });

    const scriptId = `product-schema-${name.replace(/\s+/g, '-').toLowerCase()}`;
    let scriptTag = document.getElementById(scriptId);
    
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    
    scriptTag.textContent = JSON.stringify(schema);

    return () => {
      const element = document.getElementById(scriptId);
      if (element) {
        element.remove();
      }
    };
  }, [name, description, image, price, currency, availability]);

  return null;
};

export default ProductSchema;

