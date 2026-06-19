import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const backendSkills = [
  { name: "Node.js / Express.js", percentage: 92, color: "#4ade80" },
  { name: "PostgreSQL / MySQL", percentage: 90, color: "#60a5fa" },
  { name: "REST API Design", percentage: 93, color: "#a78bfa" },
  { name: "TypeScript", percentage: 88, color: "#38bdf8" },
  { name: "Authentication & Security", percentage: 85, color: "#fb923c" },
];

const frontendSkills = [
  { name: "React.js", percentage: 82, color: "#61dafb" },
  { name: "HTML / CSS / Tailwind", percentage: 85, color: "#f472b6" },
  { name: "JavaScript (ES6+)", percentage: 88, color: "#fbbf24" },
];

const technologies = [
  { name: "Node.js", icon: "fab fa-node-js", color: "#4ade80" },
  { name: "React", icon: "fab fa-react", color: "#61dafb" },
  { name: "JavaScript", icon: "fab fa-js", color: "#fbbf24" },
  { name: "Git / GitHub", icon: "fab fa-git-alt", color: "#f97316" },
  { name: "PostgreSQL", icon: "fas fa-database", color: "#60a5fa" },
  { name: "Docker", icon: "fab fa-docker", color: "#38bdf8" },
  { name: "Linux", icon: "fab fa-linux", color: "#a78bfa" },
  { name: "REST APIs", icon: "fas fa-plug", color: "#34d399" },
];

function SkillBar({ skill, index }: { skill: typeof backendSkills[0]; index: number }) {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setAnimatedWidth(skill.percentage), index * 150);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.percentage, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-5"
    >
      <div className="flex justify-between mb-2">
        <span className="text-slate-300 text-sm font-medium font-mono">{skill.name}</span>
        <span className="text-sm font-mono" style={{ color: skill.color }}>{skill.percentage}%</span>
      </div>
      <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${animatedWidth}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-2 rounded-full relative overflow-hidden"
          style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
        >
          <div className="absolute inset-0 animate-shimmer" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function TechIcon({ tech, index }: { tech: typeof technologies[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -6 }}
      className="glass-card glass-card-hover flex flex-col items-center gap-2 p-4 rounded-xl cursor-pointer group"
    >
      <i
        className={`${tech.icon} text-3xl transition-all duration-300 group-hover:scale-110`}
        style={{ color: tech.color, filter: `drop-shadow(0 0 8px ${tech.color}60)` }}
      />
      <span className="text-xs font-mono text-slate-400 group-hover:text-slate-200 transition-colors text-center leading-tight">{tech.name}</span>
    </motion.div>
  );
}

function SkillsCodeBlock() {
  return (
    <div className="mac-window w-full">
      <div className="mac-titlebar">
        <div className="mac-dot mac-dot-red" />
        <div className="mac-dot mac-dot-yellow" />
        <div className="mac-dot mac-dot-green" />
        <span className="ml-3 text-xs text-slate-500 font-mono">stack.ts</span>
      </div>
      <div className="mac-body">
        <div className="syn-comment mb-2">// My tech stack</div>
        <div className="mb-1">
          <span className="syn-keyword">const </span>
          <span className="syn-var">stack</span>
          <span className="syn-operator"> = </span>
          <span className="syn-bracket">{"{"}</span>
        </div>
        <div className="ml-4 mb-1">
          <span className="syn-type">backend</span>
          <span className="syn-operator">: </span>
          <span className="syn-bracket">[</span>
          <span className="syn-string">"Node.js"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"Express"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"PostgreSQL"</span>
          <span className="syn-bracket">],</span>
        </div>
        <div className="ml-4 mb-1">
          <span className="syn-type">frontend</span>
          <span className="syn-operator">: </span>
          <span className="syn-bracket">[</span>
          <span className="syn-string">"React"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"TypeScript"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"Tailwind"</span>
          <span className="syn-bracket">],</span>
        </div>
        <div className="ml-4 mb-1">
          <span className="syn-type">tools</span>
          <span className="syn-operator">: </span>
          <span className="syn-bracket">[</span>
          <span className="syn-string">"Docker"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"Git"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"Linux"</span>
          <span className="syn-bracket">],</span>
        </div>
        <div className="ml-4">
          <span className="syn-type">orm</span>
          <span className="syn-operator">: </span>
          <span className="syn-string">"Drizzle / Prisma"</span>
        </div>
        <div>
          <span className="syn-bracket">{"}"}</span>
          <span className="syn-bracket">;</span>
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 midnight-bg relative overflow-hidden">
      <div className="particle w-80 h-80 bottom-0 left-[-5rem] bg-violet-600/8 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mb-3">03. skills</div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text-purple">Skills & Stack</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Backend-first, full-stack capable — built on Node.js, PostgreSQL, and React.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base font-semibold text-green-400 font-mono mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              Backend Skills
            </h3>
            {backendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}

            <h3 className="text-base font-semibold text-blue-400 font-mono mt-8 mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
              Frontend Skills
            </h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>

          {/* Tech grid + code block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-base font-mono text-slate-400 mb-6">
                <span className="syn-keyword">import </span>
                <span className="syn-bracket">{"{ "}</span>tools
                <span className="syn-bracket">{" }"}</span>
                <span className="syn-keyword"> from </span>
                <span className="syn-string">"my-arsenal"</span>
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {technologies.map((tech, index) => (
                  <TechIcon key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </div>
            <SkillsCodeBlock />
          </motion.div>
        </div>
      </div>

      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        rel="stylesheet"
      />
    </section>
  );
}
