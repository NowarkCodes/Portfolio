import { Trophy, Award, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const achievements = [
  {
    icon: Trophy,
    title: "HackMIT 2023 — 1st Place",
    description: "Built Voice2Code, a voice-controlled coding assistant for accessibility. Recognized for technical innovation and social impact.",
    link: "https://hackmit.org"
  },
  {
    icon: Trophy,
    title: "TreeHacks 2023 — Best AI/ML Project",
    description: "Developed real-time sentiment analysis pipeline processing 10k+ tweets/minute for crisis detection and response.",
    link: "https://treehacks.com"
  },
  {
    icon: Award,
    title: "Open Source Contributor",
    description: "Active contributor to LangChain and FastAPI. Authored 5+ merged PRs improving documentation and fixing critical bugs.",
    link: "https://github.com"
  },
  {
    icon: Star,
    title: "ML Engineering Lead — University AI Lab",
    description: "Led a team of 4 engineers building ML infrastructure for research projects. Established CI/CD pipelines and model deployment standards.",
  },
  {
    icon: Award,
    title: "Google Cloud Certified — Professional ML Engineer",
    description: "Demonstrated expertise in designing, building, and productionizing ML models on Google Cloud Platform.",
    link: "https://cloud.google.com/certification"
  }
];

const ExperienceSection = () => {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>();

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl">
        <h2 
          className={cn(
            "text-2xl md:text-3xl font-semibold text-foreground mb-12 reveal",
            isVisible && "active"
          )}
        >
          Experience & Achievements
        </h2>
        
        <div className="space-y-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={index}
                className={cn(
                  "group flex gap-4 p-4 -mx-4 achievement-item reveal-left",
                  isVisible && "active"
                )}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                <div className="flex-shrink-0 mt-1">
                  <Icon className="h-5 w-5 text-primary transition-transform duration-200 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1 transition-colors duration-200 group-hover:text-primary">
                    {achievement.link ? (
                      <a 
                        href={achievement.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {achievement.title}
                      </a>
                    ) : (
                      achievement.title
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
