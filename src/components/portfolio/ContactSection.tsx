import { Mail, Github, Linkedin } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:alex@example.com",
    display: "alex@example.com"
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    display: "github.com/alexchen"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    display: "linkedin.com/in/alexchen"
  }
];

const ContactSection = () => {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>();

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-24 px-6 md:px-12 lg:px-24 bg-card/50"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 
          className={cn(
            "text-2xl md:text-3xl font-semibold text-foreground mb-4 reveal",
            isVisible && "active"
          )}
        >
          Get in Touch
        </h2>
        
        <p 
          className={cn(
            "text-muted-foreground mb-12 reveal",
            isVisible && "active"
          )}
          style={{ transitionDelay: "150ms" }}
        >
          Open to interesting projects, collaborations, and conversations about AI engineering.
        </p>
        
        <div 
          className={cn(
            "flex flex-col sm:flex-row justify-center gap-6 reveal",
            isVisible && "active"
          )}
          style={{ transitionDelay: "300ms" }}
        >
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-6 py-3 border border-border bg-background contact-link hover:border-muted-foreground/50"
                style={{ transitionDelay: `${350 + index * 100}ms` }}
              >
                <Icon className="h-5 w-5 text-muted-foreground social-icon group-hover:text-primary" />
                <span 
                  className="text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                  style={{
                    transitionDuration: "var(--duration-fast)",
                    transitionTimingFunction: "var(--ease-interactive)"
                  }}
                >
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
