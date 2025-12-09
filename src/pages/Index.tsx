import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEO/SEOHead";
import { seoConfig } from "@/config/seo.config";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Custom Handmade Candles by Nav Priya Bharti"
        description={seoConfig.siteDescription}
        keywords={seoConfig.primaryKeywords}
        url={seoConfig.siteUrl}
        type="website"
        structuredData={seoConfig.structuredData}
      />
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Products />
        <About />
        <Contact />
        <Footer />
        <WhatsAppFloating />
        <ScrollToTop />
      </main>
    </>
  );
};

export default Index;
