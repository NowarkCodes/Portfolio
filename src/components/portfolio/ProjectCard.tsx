import { useState } from "react";
import { Github, ExternalLink, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  details?: {
    problem: string;
    approach: string;
    implementation: string;
    outcomes: string;
  };
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Calculate stagger delay (max 5 items staggered)
  const staggerDelay = index < 5 ? index * 120 : 0;

  return (
    <div 
      className={cn(
        "group border border-border bg-card p-6 hover-lift",
        "hover:border-muted-foreground/40",
        isExpanded && "border-muted-foreground/40"
      )}
      style={{ transitionDelay: `${staggerDelay}ms` }}
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1 transition-colors duration-300 group-hover:text-primary">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {project.tagline}
          </p>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground skill-pill"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-3 pt-2">
          {project.github && (
            <Button 
              variant="ghost" 
              size="sm" 
              asChild 
              className="h-8 px-3 btn-hover"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1.5" />
                Code
              </a>
            </Button>
          )}
          {project.demo && (
            <Button 
              variant="ghost" 
              size="sm" 
              asChild 
              className="h-8 px-3 btn-hover"
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1.5" />
                Demo
              </a>
            </Button>
          )}
          {project.details && (
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                "h-8 px-3 ml-auto transition-all",
                "hover:bg-primary/10"
              )}
              style={{ 
                transitionDuration: "var(--duration-interactive)",
                transitionTimingFunction: "var(--ease-interactive)"
              }}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>
                  Less
                  <X className="h-4 w-4 ml-1 icon-rotate" />
                </>
              ) : (
                <>
                  More
                  <ChevronDown 
                    className={cn(
                      "h-4 w-4 ml-1 transition-transform",
                      "group-hover:translate-y-0.5"
                    )}
                    style={{ 
                      transitionDuration: "var(--duration-fast)",
                      transitionTimingFunction: "var(--ease-interactive)"
                    }}
                  />
                </>
              )}
            </Button>
          )}
        </div>
      </div>
      
      <div 
        className={cn(
          "grid card-expand",
          isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          {project.details && (
            <div 
              className="mt-6 pt-6 border-t border-border space-y-4"
              style={{
                animation: isExpanded ? "slideUpScale 400ms var(--ease-entrance) forwards" : "none"
              }}
            >
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">The Problem</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.details.problem}
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Technical Approach</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.details.approach}
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Implementation</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.details.implementation}
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Outcomes & Learnings</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.details.outcomes}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
