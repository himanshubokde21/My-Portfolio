import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const technicalSkills = [
  { name: "Data Science & Analysis", percentage: 92, color: "#a78bfa" },
  { name: "Python / Machine Learning", percentage: 90, color: "#60a5fa" },
  { name: "SQL / Database Management", percentage: 88, color: "#34d399" },
  { name: "Web Development", percentage: 85, color: "#f472b6" },
  { name: "Power BI / Data Visualization", percentage: 80, color: "#fb923c" },
];

const technologies = [
  { name: "Python", icon: "fab fa-python", color: "#3b82f6" },
  { name: "Database", icon: "fas fa-database", color: "#38bdf8" },
  { name: "Power BI", icon: "fas fa-chart-bar", color: "#eab308" },
  { name: "Machine Learning", icon: "fas fa-brain", color: "#a855f7" },
  { name: "Data Analysis", icon: "fas fa-chart-line", color: "#22c55e" },
  { name: "AI/ML", icon: "fas fa-robot", color: "#ef4444" },
  { name: "Web Dev", icon: "fas fa-code", color: "#f97316" },
  { name: "Data Science", icon: "fas fa-microscope", color: "#818cf8" },
];

function SkillBar({ skill, index }: { skill: typeof technicalSkills[0]; index: number }) {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedWidth(skill.percentage);
      }, index * 150);
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
      className="mb-6"
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
          style={{ background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
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
        <span className="ml-3 text-xs text-slate-500 font-mono">skills.py</span>
      </div>
      <div className="mac-body">
        <div className="syn-comment mb-2"># My technical stack</div>
        <div className="mb-1">
          <span className="syn-var">stack</span>
          <span className="syn-operator"> = </span>
          <span className="syn-bracket">{"{"}</span>
        </div>
        <div className="ml-4 mb-1">
          <span className="syn-string">"languages"</span>
          <span className="syn-operator">: </span>
          <span className="syn-bracket">[</span>
          <span className="syn-string">"Python"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"SQL"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"R"</span>
          <span className="syn-bracket">],</span>
        </div>
        <div className="ml-4 mb-1">
          <span className="syn-string">"ml_libs"</span>
          <span className="syn-operator">: </span>
          <span className="syn-bracket">[</span>
          <span className="syn-string">"PyTorch"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"sklearn"</span>
          <span className="syn-bracket">],</span>
        </div>
        <div className="ml-4 mb-1">
          <span className="syn-string">"data"</span>
          <span className="syn-operator">: </span>
          <span className="syn-bracket">[</span>
          <span className="syn-string">"Pandas"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"NumPy"</span>
          <span className="syn-bracket">],</span>
        </div>
        <div className="ml-4 mb-1">
          <span className="syn-string">"viz"</span>
          <span className="syn-operator">: </span>
          <span className="syn-bracket">[</span>
          <span className="syn-string">"Power BI"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"Matplotlib"</span>
          <span className="syn-bracket">]</span>
        </div>
        <div>
          <span className="syn-bracket">{"}"}</span>
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
            <span className="gradient-text-purple">Skills & Technologies</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning data science, AI/ML, and visualization.
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
            <h3 className="text-xl font-bold text-slate-200 mb-8 font-mono">
              <span className="syn-keyword">const</span>{" "}
              <span className="syn-var">expertise</span>{" "}
              <span className="syn-operator">=</span>{" "}
              <span className="syn-bracket">{"["}</span>
            </h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
            <div className="text-slate-500 font-mono text-sm">
              <span className="syn-bracket">{"]"}</span>
            </div>
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
              <h3 className="text-xl font-bold text-slate-200 mb-6 font-mono">
                <span className="syn-keyword">import</span>{" "}
                <span className="syn-bracket">{"{"}</span>{" "}tools{" "}
                <span className="syn-bracket">{"}"}</span>
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
