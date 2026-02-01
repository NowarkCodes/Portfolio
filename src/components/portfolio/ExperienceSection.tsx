import { Trophy, Award, Star } from "lucide-react";

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
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12">
          Experience & Achievements
        </h2>
        
        <div className="space-y-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={index}
                className="group flex gap-4 p-4 -mx-4 transition-colors hover:bg-card/50"
              >
                <div className="flex-shrink-0 mt-1">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">
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
