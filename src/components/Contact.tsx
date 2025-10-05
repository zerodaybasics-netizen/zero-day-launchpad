import { Phone, Mail, Globe, Instagram, Youtube } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 95679 22498 / +91 82899 37100",
      href: "tel:+919567922498",
    },
    {
      icon: Mail,
      label: "Email",
      value: "zerodaybasics@gmail.com",
      href: "mailto:zerodaybasics@gmail.com",
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.zerodaybasics.in",
      href: "https://www.zerodaybasics.in",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://www.instagram.com/zerodaybasics",
      username: "@zerodaybasics",
    },
    {
      icon: Youtube,
      name: "YouTube",
      href: "https://www.youtube.com/@zerodaybasics",
      username: "@zerodaybasics",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-12 animate-fade-in">
            Get In <span className="text-primary">Touch</span>
          </h2>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in">
            {contactInfo.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-glow-red group"
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-body mb-1">
                        {item.label}
                      </div>
                      <div className="text-sm font-semibold text-foreground">
                        {item.value}
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="text-center animate-fade-in">
            <h3 className="text-xl font-heading font-semibold mb-6">
              Follow Us
            </h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    aria-label={social.name}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all hover:shadow-glow-red">
                        <IconComponent className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        {social.username}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
