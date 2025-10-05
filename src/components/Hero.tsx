import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import binaryBg from "@/assets/binary-bg.jpg";

const Hero = () => {
  const scrollToSyllabus = () => {
    const element = document.querySelector("#syllabus");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${binaryBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
          Your First Step to
          <br />
          <span className="text-primary animate-glow-pulse">Cyber Security</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-body">
          Turn curiosity into ethical hacking skills.
        </p>

        <Button
          size="lg"
          onClick={scrollToSyllabus}
          className="group bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-8 py-6 text-lg rounded-full shadow-glow-red hover:shadow-glow-red-strong transition-all duration-300"
        >
          Start Learning Now
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
