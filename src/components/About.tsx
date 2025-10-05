import { Shield, Target, AlertTriangle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-12 animate-fade-in">
            About <span className="text-primary">ZeroDay Basics</span>
          </h2>

          {/* Main Content */}
          <div className="space-y-8 animate-fade-in">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              ZeroDay Basics is your first step into the world of cybersecurity. A{" "}
              <span className="text-primary font-semibold">Zero-Day</span> is a secret flaw hackers
              exploit before anyone else knows. We teach you to think like attackers so you can
              defend like pros.
            </p>

            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Simple lessons, real hacker mindset, ethical purpose.
            </p>

            {/* Info Box */}
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-l-4 border-primary p-6 md:p-8 rounded-lg">
              <p className="text-lg md:text-xl font-heading font-semibold text-primary">
                Master Attacker Mindsets · Build Ethical Defenses
              </p>
            </div>

            {/* Project Goals */}
            <div className="mt-12">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
                Project Goals & Objectives
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <h4 className="text-xl font-heading font-semibold mb-2">Simplify Security</h4>
                  <p className="text-muted-foreground">
                    Make cybersecurity simple and accessible for complete beginners.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <Target className="w-12 h-12 text-primary mb-4" />
                  <h4 className="text-xl font-heading font-semibold mb-2">Spark Curiosity</h4>
                  <p className="text-muted-foreground">
                    Teach hacker mindset ethically to inspire the next generation of defenders.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <AlertTriangle className="w-12 h-12 text-primary mb-4" />
                  <h4 className="text-xl font-heading font-semibold mb-2">Build Awareness</h4>
                  <p className="text-muted-foreground">
                    Enhance online safety through lessons, sessions, and certifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
