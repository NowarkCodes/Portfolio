import { useState } from "react";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
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
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={cn(
        "group border border-border bg-card p-6 transition-all duration-300",
        "hover:border-muted-foreground/30 hover:shadow-[var(--shadow-lift)]",
        isExpanded && "border-muted-foreground/30"
      )}
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">
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
              className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-3 pt-2">
          {project.github && (
            <Button variant="ghost" size="sm" asChild className="h-8 px-3">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1.5" />
                Code
              </a>
            </Button>
          )}
          {project.demo && (
            <Button variant="ghost" size="sm" asChild className="h-8 px-3">
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
              className="h-8 px-3 ml-auto"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>
                  Less
                  <ChevronUp className="h-4 w-4 ml-1" />
                </>
              ) : (
                <>
                  More
                  <ChevronDown className="h-4 w-4 ml-1" />
                </>
              )}
            </Button>
          )}
        </div>
      </div>
      
      {isExpanded && project.details && (
        <div className="mt-6 pt-6 border-t border-border space-y-4">
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
  );
};

export default ProjectCard;
