import ProductCard from "./ProductCard";

const products = [
  {
    image: "https://i.postimg.cc/Z5qxqfQd/Whats-App-Image-2025-10-19-at-19-33-45.jpg",
    name: "Mithai Candle",
    description: "Traditional Indian sweet-shaped candles with silver detailing, perfect for festive celebrations.",
  },
  {
    image: "https://i.postimg.cc/sDkp4V68/Whats_App_Image_2025_10_19_at_19_33_45.jpg",
    name: "Bubble Candle",
    description: "Elegant layered bubble candles in beautiful gradient colors, a modern centerpiece.",
  },
  {
    image: "https://i.postimg.cc/Y9CgCj0h/Whats_App_Image_2025_10_19_at_19_31_39.jpg",
    name: "Mini Rose",
    description: "Delicate rose-shaped candles handcrafted with intricate petal details.",
  },
  {
    image: "https://i.postimg.cc/5t1LDsMC/Whats_App_Image_2025_10_19_at_19_33_08.jpg",
    name: "Rose Bouquet",
    description: "Stunning bouquet-style candles that make perfect gifts for loved ones.",
  },
  {
    image: "https://i.postimg.cc/dVGGWzgC/Whats_App_Image_2025_10_19_at_19_33_09.jpg",
    name: "Jelly Candle",
    description: "Whimsical flower bouquet candles in soft pastel hues.",
  },
  {
    image: "https://i.postimg.cc/bvTkP1yz/Whats_App_Image_2025_10_19_at_19_32_21.jpg",
    name: "Floating Candle",
    description: "Vibrant multicolored bubble candles that bring joy to any space.",
  },
  {
    image: "https://i.postimg.cc/Dy9qP2jt/Whats_App_Image_2025_10_19_at_19_33_43.jpg",
    name: "Bubble Candle",
    description: "Beautifully crafted star-shaped candles that add a touch of magic to any space.",
  },
  {
    image: "https://i.postimg.cc/TP9gxndP/Whats_App_Image_2025_10_19_at_19_31_50.jpg",
    name: "Teddy cup candle",
    description: "Teddy cup candle with a beautiful design and a touch of magic.",
  },
  {
    image: "https://i.postimg.cc/R0RKmwSV/Whats_App_Image_2025_10_19_at_19_32_28.jpg",
    name: "Mini CoffeeCandle",
    description: "Mini coffee candle with a beautiful design and a touch of magic.",
  },
  {
    image: "https://i.postimg.cc/R09K2gzD/Whats_App_Image_2025_10_19_at_19_33_01.jpg",
    name: "Mini Tea Cup Candle",
    description: "Mini tea candle with a beautiful design and a touch of magic.",
  },
  {
    image: "https://i.postimg.cc/N0YmZdwN/Whats_App_Image_2025_10_19_at_19_33_04.jpg",
    name: "Tulip Candle",
    description: "Tulip candle with a beautiful design and a touch of magic.",
  },
  {
    image: "https://i.postimg.cc/76Z7Zbh1/Whats_App_Image_2025_10_19_at_19_31_10.jpg",
    name: "Heart Candle",
    description: "Heart candle with a beautiful design and a touch of magic.",
  },
  {
    image: "https://i.postimg.cc/pTL8LyrF/Whats_App_Image_2025_10_19_at_19_31_23.jpg",
    name: "Diya",
    description: "Diya with a beautiful design and a touch of magic.",
  },
  {
    image: "https://i.postimg.cc/VkKq33z5/Whats_App_Image_2025_12_10_at_02_22_57_(2).jpg",
    name: "Rose Bouquet",
    description: "Rose bouquet with a beautiful design and a touch of magic.",
  },
  {
    image: "https://i.postimg.cc/dVsRNqcD/Whats_App_Image_2025_12_10_at_02_22_58_(2).jpg",
    name: "Diya Set",
    description: "Diya set with a beautiful design and a touch of magic.",
  },
  {
    image: "https://i.postimg.cc/8zZRqqTF/Whats_App_Image_2025_12_10_at_02_22_58.jpg",
    name: "Diya Set catalogue",
    description: "Diya set catalogue with a beautiful design and a touch of magic.",
  },
  {
    image: "https://i.postimg.cc/mgmY00Tz/Whats_App_Image_2025_12_10_at_02_22_57_(1).jpg",
    name: "Our Products Catalogue 1",
    description: "Our products catalogue with a beautiful design and a touch of magic.",
  },
  {
    image: "https://i.postimg.cc/sgTYtt3W/Whats_App_Image_2025_12_10_at_02_22_57.jpg",
    name: "Our Products Catalogue 2",
    description: "Our products catalogue with a beautiful design and a touch of magic.",
  },
  {
    image: "https://i.postimg.cc/L4gxj62v/Whats_App_Image_2025_12_10_at_02_22_56.jpg",
    name: "Our Products Catalogue 3",
    description: "Our products catalogue with a beautiful design and a touch of magic.",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Collection</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each candle is lovingly handcrafted using premium wax and natural
            fragrances, designed to transform your space into a sanctuary of
            warmth.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              image={product.image}
              name={product.name}
              description={product.description}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Additional Categories */}
        <div className="mt-20">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-center text-foreground mb-10">
            More Categories We Offer
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Diya", "Modak", "Jar Candle", "Coffee Candle", "Custom Orders"].map(
              (category) => (
                <span
                  key={category}
                  className="px-6 py-3 rounded-full glass text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-pointer"
                >
                  {category}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
