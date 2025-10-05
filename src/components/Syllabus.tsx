import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Shield,
  Network,
  Lock,
  Monitor,
  Globe,
  Target,
  Brain,
  ShieldCheck,
  Code,
  Trophy,
} from "lucide-react";

const syllabusModules = [
  {
    id: "1",
    icon: Shield,
    title: "Getting Started with Cybersecurity",
    topics: [
      "What is Cybersecurity?",
      "Why It's Important Today",
      "Types of Hackers",
      "Common Cyber Threats",
    ],
  },
  {
    id: "2",
    icon: Network,
    title: "Networking Basics",
    topics: ["Networks", "IP Addresses", "Domains", "Ports", "Protocols"],
  },
  {
    id: "3",
    icon: Lock,
    title: "Cryptography Basics",
    topics: ["Encryption vs Decryption", "Hashing", "Everyday Uses"],
  },
  {
    id: "4",
    icon: Monitor,
    title: "Operating System Basics",
    topics: ["Windows vs Linux", "Permissions", "Command Line"],
  },
  {
    id: "5",
    icon: Globe,
    title: "Web Basics",
    topics: [
      "How Websites Work",
      "HTTP vs HTTPS",
      "Cookies",
      "Browser Security",
    ],
  },
  {
    id: "6",
    icon: Target,
    title: "Phases of Ethical Hacking",
    topics: ["Reconnaissance", "Gaining Access", "Covering Tracks"],
  },
  {
    id: "7",
    icon: Brain,
    title: "Attacker's Mindset",
    topics: [
      "How Hackers Think",
      "Social Engineering",
      "Common Mistakes",
    ],
  },
  {
    id: "8",
    icon: ShieldCheck,
    title: "Cyber Hygiene & Safety",
    topics: ["Passwords", "2FA", "Phishing", "Safe Browsing", "Updates"],
  },
  {
    id: "9",
    icon: Code,
    title: "Hands-on Practice (Optional)",
    topics: ["Guided beginner labs and exercises"],
  },
  {
    id: "10",
    icon: Trophy,
    title: "Final Wrap-Up",
    topics: ["Review", "Quizzes", "Capture-the-Flag Demo"],
  },
];

const Syllabus = () => {
  return (
    <section id="syllabus" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-4 animate-fade-in">
            <span className="text-primary">ZeroDay Basics</span> Syllabus
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            A comprehensive curriculum designed for beginners
          </p>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4 animate-fade-in">
            {syllabusModules.map((module) => {
              const IconComponent = module.icon;
              return (
                <AccordionItem
                  key={module.id}
                  value={module.id}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center gap-4 text-left">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground font-body">
                          Module {module.id}
                        </div>
                        <div className="text-lg font-heading font-semibold">
                          {module.title}
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className="space-y-2 ml-16">
                      {module.topics.map((topic, index) => (
                        <li
                          key={index}
                          className="text-foreground/80 flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">▹</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Syllabus;
