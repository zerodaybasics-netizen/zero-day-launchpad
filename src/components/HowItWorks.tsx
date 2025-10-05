import { Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <section id="how" className="py-20 md:py-32 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8 animate-fade-in">
            <Lightbulb className="w-10 h-10 text-primary" />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 animate-fade-in">
            How Do We <span className="text-primary">Teach?</span>
          </h2>

          {/* Content */}
          <div className="space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed animate-fade-in">
            <p>
              Cybersecurity often feels like a <span className="text-primary font-semibold">blackout</span>{" "}
              – full of codes, jargon, and confusion.
            </p>

            <p className="text-2xl md:text-3xl font-heading font-bold text-primary py-4">
              At ZeroDay Basics, we switch on the light.
            </p>

            <p>
              We simplify complex concepts, break them into clear steps, and guide you through the{" "}
              <span className="text-primary font-semibold">hacker mindset</span> so you can learn,
              practice, and defend with confidence.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-12 animate-fade-in">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-8 py-6 text-lg rounded-full shadow-glow-red hover:shadow-glow-red-strong transition-all duration-300"
            >
              Join Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
