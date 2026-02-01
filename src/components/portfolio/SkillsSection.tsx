const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "Go", "JavaScript", "SQL", "Rust"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Next.js", "FastAPI", "Node.js", "TensorFlow", "PyTorch"]
  },
  {
    title: "AI/ML Tools",
    skills: ["LangChain", "OpenAI API", "Hugging Face", "FAISS", "Pinecone", "ChromaDB"]
  },
  {
    title: "Infrastructure & DevOps",
    skills: ["Docker", "Kubernetes", "AWS", "GCP", "Terraform", "GitHub Actions"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch", "Pinecone", "Supabase"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12">
          Skills & Stack
        </h2>
        
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
