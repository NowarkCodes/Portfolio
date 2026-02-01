const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
          About
        </h2>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I approach engineering as a craft—every system I build should be robust, 
            maintainable, and genuinely useful. My focus is on AI/ML systems, particularly 
            LLM applications, RAG pipelines, and the infrastructure that makes them reliable 
            at scale.
          </p>
          
          <p>
            Most of my work lives at the intersection of machine learning and software 
            engineering. I enjoy the challenge of taking research concepts and turning them 
            into production systems—handling the edge cases, optimizing for latency, and 
            building the observability that keeps things running smoothly.
          </p>
          
          <p>
            I'm a hackathon veteran with multiple wins, which has shaped how I think about 
            building. Constraints force clarity. Speed reveals what actually matters. The 
            best ideas often come from shipping something rough and iterating based on 
            real feedback.
          </p>
          
          <p>
            When I'm not building, I'm usually exploring new papers, contributing to 
            open-source projects, or experimenting with whatever new framework caught 
            my attention this week.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
