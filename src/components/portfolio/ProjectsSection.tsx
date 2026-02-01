import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "SemanticSearch",
    tagline: "Privacy-first semantic search engine using local embeddings",
    description: "A RAG-based search tool that runs entirely locally, using Sentence Transformers for embeddings and FAISS for vector similarity. Achieved 40ms average query response time on 10k+ documents without cloud dependencies.",
    tech: ["Python", "FAISS", "Sentence-BERT", "FastAPI", "React"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    details: {
      problem: "Existing semantic search solutions either require cloud dependencies with associated privacy concerns or have significant latency issues when running locally.",
      approach: "Built a hybrid architecture combining dense retrieval with BM25 sparse matching. Used quantized embeddings to reduce memory footprint while maintaining semantic accuracy.",
      implementation: "Implemented using FastAPI for the backend, FAISS for vector storage with IVF-PQ indexing, and a React frontend with debounced search. Added caching layer for frequent queries.",
      outcomes: "Reduced average query latency to 40ms from 200ms+ baseline. System handles 10k+ documents on consumer hardware with 2GB RAM footprint. Open-sourced with 500+ GitHub stars."
    }
  },
  {
    title: "CodeReview AI",
    tagline: "Automated code review assistant powered by LLMs",
    description: "An intelligent code review tool that analyzes pull requests, identifies potential issues, suggests improvements, and learns from team preferences over time.",
    tech: ["TypeScript", "OpenAI", "LangChain", "PostgreSQL", "Docker"],
    github: "https://github.com",
    details: {
      problem: "Code reviews are time-consuming and inconsistent. Junior developers often wait days for feedback while senior engineers spend 30%+ of their time reviewing code.",
      approach: "Used a multi-agent system with specialized reviewers for security, performance, and style. Implemented RAG over team's historical review comments to match team voice.",
      implementation: "Built as a GitHub App using TypeScript. LangChain orchestrates multiple GPT-4 agents. PostgreSQL stores review history and team preferences with pgvector for embeddings.",
      outcomes: "Reduced initial review turnaround from 24 hours to 10 minutes. Catches 85% of issues that human reviewers flag. Deployed to 3 engineering teams internally."
    }
  },
  {
    title: "StreamProcess",
    tagline: "Real-time data processing pipeline framework",
    description: "A lightweight framework for building real-time data pipelines with exactly-once semantics, automatic scaling, and comprehensive observability out of the box.",
    tech: ["Go", "Apache Kafka", "Redis", "Prometheus", "Kubernetes"],
    github: "https://github.com",
    details: {
      problem: "Existing stream processing frameworks are either too heavy for small teams or lack critical features like exactly-once processing and easy observability.",
      approach: "Designed a minimal core with a plugin system for sources and sinks. Used Redis Streams as a lightweight Kafka alternative for smaller deployments.",
      implementation: "Written in Go for low latency and efficient resource usage. Automatic horizontal scaling based on lag metrics. Built-in Prometheus metrics and distributed tracing.",
      outcomes: "Processing 1M+ events/day in production. 99.99% uptime over 6 months. Reduced infrastructure costs by 60% compared to previous Flink-based solution."
    }
  },
  {
    title: "DocQA",
    tagline: "Question-answering system for technical documentation",
    description: "An AI-powered documentation assistant that understands context, provides accurate answers with citations, and integrates seamlessly with existing documentation platforms.",
    tech: ["Python", "LangChain", "Pinecone", "Next.js", "Vercel"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    details: {
      problem: "Developers waste hours searching through documentation. Traditional search returns pages, not answers, forcing users to read through irrelevant content.",
      approach: "Combined dense retrieval with a reranking step for precision. Used GPT-4 for answer synthesis with strict grounding to prevent hallucinations.",
      implementation: "Pinecone for vector storage with hybrid search. Custom chunking strategy that preserves code blocks and maintains document hierarchy. Next.js frontend deployed on Vercel.",
      outcomes: "Deployed for 3 open-source projects. 90% of queries receive accurate answers on first attempt. Reduced average documentation lookup time from 5 minutes to 30 seconds."
    }
  },
  {
    title: "MLOps Toolkit",
    tagline: "End-to-end machine learning deployment platform",
    description: "A comprehensive toolkit for deploying, monitoring, and managing ML models in production. Features include automated canary deployments, A/B testing, and model drift detection.",
    tech: ["Python", "FastAPI", "Kubernetes", "MLflow", "Grafana"],
    github: "https://github.com",
    details: {
      problem: "Getting ML models to production is harder than training them. Teams struggle with versioning, deployment, monitoring, and rollback capabilities.",
      approach: "Built on Kubernetes for scalability. Used MLflow for model registry and versioning. Implemented shadow deployments for safe testing of new models.",
      implementation: "FastAPI serving layer with automatic batching. Custom Kubernetes operator for model deployments. Grafana dashboards for model performance monitoring.",
      outcomes: "Reduced model deployment time from days to hours. Caught 3 production issues before they impacted users through drift detection. Now used by 2 ML teams internally."
    }
  },
  {
    title: "Voice2Code",
    tagline: "Voice-controlled coding assistant (Hackathon Winner)",
    description: "A hands-free coding assistant that translates natural language voice commands into code, understands project context, and integrates with popular IDEs.",
    tech: ["Python", "Whisper", "GPT-4", "VS Code API", "WebSocket"],
    github: "https://github.com",
    details: {
      problem: "Developers with RSI or accessibility needs struggle with traditional input methods. Existing voice coding tools have poor accuracy and limited IDE integration.",
      approach: "Used Whisper for speech-to-text with custom fine-tuning on programming vocabulary. GPT-4 for intent parsing and code generation with project context.",
      implementation: "VS Code extension with WebSocket connection to local Python backend. Real-time streaming transcription. Context-aware suggestions based on open files.",
      outcomes: "Won 1st place at HackMIT 2023. 95% command recognition accuracy for common operations. Featured in accessibility-focused tech publications."
    }
  }
];

const ProjectsSection = () => {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>();

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl">
        <h2 
          className={cn(
            "text-2xl md:text-3xl font-semibold text-foreground mb-12 reveal",
            isVisible && "active"
          )}
        >
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn("reveal", isVisible && "active")}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
