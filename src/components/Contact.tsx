import { Phone, Mail, MapPin, Send, Instagram, Facebook } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formDataToSend = new FormData(form);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/priyasingh.priyacool@gmail.com", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to brighten your space? Contact us for custom orders, bulk
            inquiries, or just to say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Hidden inputs for FormSubmit.co */}
              <input type="hidden" name="_cc" value="harshitsingh0612@gmail.com" />
              <input type="hidden" name="_subject" value="New Contact Form Submission - Glow & Shine" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground"
                  placeholder="Tell us about your order..."
                  required
                />
              </div>
              <Button type="submit" variant="glow" size="lg" className="w-full">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                    Call Us
                  </h4>
                  <p className="text-muted-foreground">+91 7677 67 2641</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                    Email Us
                  </h4>
                  <p className="text-muted-foreground">hello@glowandshine.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                    Visit Us
                  </h4>
                  <p className="text-muted-foreground">
                    104 Golden Lake view apartments,
                    <br />
                    Bommanahalli, Bengaluru- 560068
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-border">
                <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/glownshine_2213?igsh=dnFsZGlydnNzbGFl"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:border-primary/50 transition-all group"
                  >
                    <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  {/* <a
                    href="#"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:border-primary/50 transition-all group"
                  >
                    <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
