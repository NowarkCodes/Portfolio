import { Github, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6 animate-fade-in-up">
          Alex Chen
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8 animate-fade-in-up animate-delay-200">
          Building intelligent systems, products, and tools.
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed animate-fade-in-up animate-delay-300">
          AI engineer focused on building production-ready systems that solve real problems. 
          I specialize in LLM applications, backend architecture, and turning complex technical 
          challenges into elegant solutions.
        </p>
        
        <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-400">
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToProjects}
            className="group transition-all duration-200 hover:scale-[1.02]"
          >
            View Projects
            <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-y-1" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg"
            asChild
            className="transition-all duration-200 hover:scale-[1.02]"
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
