import { motion } from "framer-motion";
import { ExternalLink, Github, Play, MessageCircle, Brain, Flame, Search, Lock } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Backend — YouTube Clone",
    description:
      "Production-grade YouTube backend built with TypeScript & Express. Features video upload/streaming pipeline, JWT auth, subscriptions, likes, comments, watch history, and aggregation pipelines for analytics.",
    icon: Play,
    accent: "#ef4444",
    accentLight: "rgba(239,68,68,0.15)",
    technologies: ["TypeScript", "Node.js", "Express", "MongoDB", "Mongoose"],
    codeUrl: "https://github.com/himanshubokde21/Backend-Youtube",
    demoUrl: null,
    type: "Backend API",
    isPrivate: false,
  },
  {
    id: 2,
    title: "Backend — WhatsApp Clone",
    description:
      "WhatsApp-inspired messaging backend in TypeScript. Real-time chat via Socket.io, group management, media sharing, message delivery/read receipts, and contact synchronization.",
    icon: MessageCircle,
    accent: "#16a34a",
    accentLight: "rgba(22,163,74,0.15)",
    technologies: ["TypeScript", "Node.js", "Socket.io", "Express", "JWT"],
    codeUrl: "https://github.com/himanshubokde21/Backend-WhatsApp",
    demoUrl: null,
    type: "Full Stack",
    isPrivate: false,
  },
  {
    id: 3,
    title: "CodeNeura",
    description:
      "Web-based platform blending AI, data science, and visualization tools for interactive learning. Explore ML concepts, data analysis, and AI-powered workflows — all in the browser.",
    icon: Brain,
    accent: "#7c3aed",
    accentLight: "rgba(124,58,237,0.15)",
    technologies: ["JavaScript", "Python", "AI/ML", "Data Viz"],
    codeUrl: "https://github.com/himanshubokde21/CodeNeura",
    demoUrl: null,
    type: "AI Platform",
    isPrivate: false,
  },
  {
    id: 4,
    title: "Remind Candles",
    description:
      "E-commerce platform for a candle brand built with TypeScript. Product catalog, cart, checkout flow, and order management with a clean storefront UI.",
    icon: Flame,
    accent: "#f59e0b",
    accentLight: "rgba(245,158,11,0.15)",
    technologies: ["TypeScript", "Node.js", "Express", "PostgreSQL"],
    codeUrl: "https://github.com/himanshubokde21/Remind-Candles",
    demoUrl: null,
    type: "Full Stack",
    isPrivate: false,
  },
  {
    id: 5,
    title: "Citizen Auditor AI",
    description:
      "AI-powered civic transparency platform that audits local governance data. Surfaces public accountability insights through intelligent data pipelines, structured analysis, and interactive dashboards.",
    icon: Search,
    accent: "#0891b2",
    accentLight: "rgba(8,145,178,0.15)",
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "React", "AI"],
    codeUrl: null,
    demoUrl: "https://citizen-auditor-system--bokdesaurabh802.replit.app/",
    type: "AI + Civic Tech",
    isPrivate: true,
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
    >
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${project.accent}, ${project.accent}60)` }}
      />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: project.accentLight }}
          >
            <Icon size={22} style={{ color: project.accent }} />
          </div>
          <div className="flex items-center gap-2">
            {project.isPrivate && (
              <span className="flex items-center gap-1 text-xs font-mono px-2 py-1 rounded-md bg-white/5 text-slate-500 border border-white/8">
                <Lock size={10} />
                Private
              </span>
            )}
            <span
              className="text-xs font-mono font-semibold px-2 py-1 rounded-md"
              style={{ background: project.accentLight, color: project.accent }}
            >
              {project.type}
            </span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

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

        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-violet-400 transition-colors duration-200"
              data-testid={`link-demo-${project.id}`}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.codeUrl ? (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200"
              data-testid={`link-github-${project.id}`}
            >
              <Github size={14} />
              Source Code
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm text-slate-600 cursor-not-allowed">
              <Lock size={14} />
              Private Repo
            </span>
          )}
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
          <div><span className="syn-function">Backend-Youtube/</span></div>
          <div><span className="syn-function">Backend-WhatsApp/</span></div>
          <div><span className="syn-function">CodeNeura/</span></div>
          <div><span className="syn-function">Remind-Candles/</span></div>
          <div><span className="syn-function">CivicAudit/</span> <span className="syn-comment"># private</span></div>
        </div>
        <div className="mb-1">
          <span className="text-green-400 mr-2">~</span>
          <span className="syn-string">$ npm run start</span>
        </div>
        <div className="ml-4 mb-1 syn-comment">Server listening on port 3000 ✓</div>
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
            <span className="gradient-text-purple">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Backend-heavy full-stack projects — APIs, AI platforms, and end-to-end web applications.
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
            href="https://github.com/himanshubokde21"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-midnight-outline flex items-center gap-2"
            data-testid="link-github-profile"
          >
            <Github size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
