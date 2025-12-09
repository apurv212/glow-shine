import { useState } from "react";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  delay?: number;
}

const ProductCard = ({ image, name, description, delay = 0 }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl card-glow opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-500 ${
          isHovered ? "opacity-90" : "opacity-70"
        }`}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3
          className={`font-display text-xl md:text-2xl font-semibold text-foreground mb-2 transition-transform duration-500 ${
            isHovered ? "translate-y-0" : "translate-y-2"
          }`}
        >
          {name}
        </h3>
        <p
          className={`text-muted-foreground text-sm transition-all duration-500 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {description}
        </p>
      </div>

      {/* Glow Border on Hover */}
      <div
        className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 ${
          isHovered
            ? "border-primary/50 shadow-[inset_0_0_30px_hsl(var(--glow)/0.2)]"
            : "border-transparent"
        }`}
      />
    </div>
  );
};

export default ProductCard;
