import { Mail, Github, Linkedin } from "lucide-react";

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
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Get in Touch
        </h2>
        
        <p className="text-muted-foreground mb-12">
          Open to interesting projects, collaborations, and conversations about AI engineering.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-6 py-3 border border-border bg-background hover:border-muted-foreground/50 transition-all duration-200"
              >
                <Icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
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
