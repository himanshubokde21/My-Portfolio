import { motion } from "framer-motion";
import { ExternalLink, Github, Brain, BarChart3, Database, Bot, TrendingUp, Eye } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sales Forecasting ML Model",
    description: "End-to-end machine learning pipeline for retail sales prediction using LSTM networks with 94% accuracy.",
    icon: TrendingUp,
    accent: "#7c3aed",
    accentLight: "rgba(124,58,237,0.15)",
    technologies: ["Python", "PyTorch", "Pandas", "Sklearn"],
    demoUrl: "#",
    codeUrl: "#",
    type: "ML Model",
  },
  {
    id: 2,
    title: "Customer Churn Prediction",
    description: "Predictive analytics dashboard to identify at-risk customers using ensemble learning methods.",
    icon: Brain,
    accent: "#2563eb",
    accentLight: "rgba(37,99,235,0.15)",
    technologies: ["Python", "XGBoost", "Power BI", "SQL"],
    demoUrl: "#",
    codeUrl: "#",
    type: "Analytics",
  },
  {
    id: 3,
    title: "NLP Sentiment Analyzer",
    description: "Real-time sentiment analysis system processing social media data with transformer-based models.",
    icon: Bot,
    accent: "#0891b2",
    accentLight: "rgba(8,145,178,0.15)",
    technologies: ["Python", "HuggingFace", "FastAPI", "React"],
    demoUrl: "#",
    codeUrl: "#",
    type: "NLP / AI",
  },
  {
    id: 4,
    title: "Data Analytics Dashboard",
    description: "Interactive business intelligence dashboard with real-time KPI tracking and drill-down capabilities.",
    icon: BarChart3,
    accent: "#059669",
    accentLight: "rgba(5,150,105,0.15)",
    technologies: ["Power BI", "DAX", "SQL Server", "Python"],
    demoUrl: "#",
    codeUrl: "#",
    type: "BI Dashboard",
  },
  {
    id: 5,
    title: "Recommendation Engine",
    description: "Collaborative filtering recommendation system deployed as a microservice with REST API.",
    icon: Eye,
    accent: "#9333ea",
    accentLight: "rgba(147,51,234,0.15)",
    technologies: ["Python", "Surprise", "Flask", "PostgreSQL"],
    demoUrl: "#",
    codeUrl: "#",
    type: "ML Model",
  },
  {
    id: 6,
    title: "ETL Data Pipeline",
    description: "Automated data pipeline processing 10M+ records daily with real-time monitoring and alerting.",
    icon: Database,
    accent: "#d97706",
    accentLight: "rgba(217,119,6,0.15)",
    technologies: ["Apache Spark", "Airflow", "PostgreSQL", "Python"],
    demoUrl: "#",
    codeUrl: "#",
    type: "Data Engineering",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const Icon = project.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="glass-card glass-card-hover rounded-2xl overflow-hidden group flex flex-col"
      style={{ "--hover-accent": project.accent } as any}
    >
      {/* Header stripe */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${project.accent}, ${project.accent}60)` }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Icon + type badge */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: project.accentLight }}
          >
            <Icon size={22} style={{ color: project.accent }} />
          </div>
          <span
            className="text-xs font-mono font-semibold px-2 py-1 rounded-md"
            style={{ background: project.accentLight, color: project.accent }}
          >
            {project.type}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/8"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          <a
            href={project.demoUrl}
            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-violet-400 transition-colors duration-200"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
          <a
            href={project.codeUrl}
            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200"
          >
            <Github size={14} />
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function TerminalBlock() {
  return (
    <div className="mac-window max-w-sm w-full mx-auto">
      <div className="mac-titlebar">
        <div className="mac-dot mac-dot-red" />
        <div className="mac-dot mac-dot-yellow" />
        <div className="mac-dot mac-dot-green" />
        <span className="ml-3 text-xs text-slate-500 font-mono">terminal</span>
      </div>
      <div className="mac-body">
        <div className="mb-1">
          <span className="text-green-400 mr-2">~</span>
          <span className="syn-string">$ ls projects/</span>
        </div>
        <div className="text-slate-400 ml-4 mb-2">
          {projects.slice(0, 3).map(p => (
            <div key={p.id}><span className="syn-function">{p.title.toLowerCase().replace(/ /g, '_')}.ipynb</span></div>
          ))}
          <span className="syn-comment">... and {projects.length - 3} more</span>
        </div>
        <div>
          <span className="text-green-400 mr-2">~</span>
          <span className="syn-string">$ _</span>
          <span className="cursor-blink text-violet-400">|</span>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 relative overflow-hidden" style={{ background: "hsl(222,47%,9%)" }}>
      <div className="particle w-96 h-96 top-20 right-[-8rem] bg-blue-600/8 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mb-3">02. portfolio</div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text-purple">My Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Data-driven projects and ML solutions that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <TerminalBlock />
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-midnight-outline flex items-center gap-2"
          >
            <Github size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
