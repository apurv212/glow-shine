import { Heart, Leaf, Sparkles, Award } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Handcrafted with Love",
    description: "Each candle is carefully made by skilled artisans with attention to every detail.",
  },
  {
    icon: Leaf,
    title: "100% Natural",
    description: "We use premium natural wax and essential oils for a clean, long-lasting burn.",
  },
  {
    icon: Sparkles,
    title: "Unique Designs",
    description: "From traditional diyas to modern bubble candles, we offer unique artisan pieces.",
  },
  {
    icon: Award,
    title: "Custom Orders",
    description: "Create your perfect candle with our bespoke custom order service.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Crafting <span className="text-gradient">Light</span> Since 2024
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Glow & Shine, we believe every candle tells a story. Our journey
              began with a simple passion for creating beautiful, handcrafted
              candles that bring warmth and elegance to any space.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              From traditional Indian festival candles like diyas and modak-shaped
              candles to modern minimalist designs, we pour our heart into every
              creation. Our commitment to quality and artistry has made us a
              trusted name in handmade candles.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-primary mb-1">100+</div>
                <div className="text-muted-foreground text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-primary mb-1">50+</div>
                <div className="text-muted-foreground text-sm">Unique Designs</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-primary mb-1">100%</div>
                <div className="text-muted-foreground text-sm">Natural Wax</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl glass group hover:border-primary/50 transition-all duration-500 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
