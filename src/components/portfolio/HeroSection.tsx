import { Github, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 100;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800;
      let startTime: number | null = null;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6 hero-name">
          Alex Chen
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8 hero-tagline">
          Building intelligent systems, products, and tools.
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed hero-description">
          AI engineer focused on building production-ready systems that solve real problems. 
          I specialize in LLM applications, backend architecture, and turning complex technical 
          challenges into elegant solutions.
        </p>
        
        <div className="flex flex-wrap gap-4 hero-cta">
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToProjects}
            className="group btn-hover"
          >
            View Projects
            <ArrowDown className="ml-2 h-4 w-4 arrow-bounce" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg"
            asChild
            className="btn-hover"
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
