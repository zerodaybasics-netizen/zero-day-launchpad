import logo from "@/assets/logo-shield.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="ZeroDay Basics" className="h-10" />
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            © 2025 ZeroDay Basics. All rights reserved.
          </div>

          {/* Tagline */}
          <div className="text-sm font-heading font-semibold">
            Where <span className="text-primary">Cybersecurity</span> Starts
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
