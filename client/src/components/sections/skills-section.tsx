import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const backendSkills = [
  { name: "Node.js / Express.js / Fastify", percentage: 90, color: "#4ade80" },
  { name: "Django (Python)", percentage: 78, color: "#22d3ee" },
  { name: "REST API Design & Zod Validation", percentage: 92, color: "#a78bfa" },
  { name: "PostgreSQL / MySQL / MongoDB", percentage: 88, color: "#60a5fa" },
  { name: "Drizzle ORM / Mongoose", percentage: 85, color: "#fb923c" },
];

const frontendSkills = [
  { name: "React.js", percentage: 85, color: "#61dafb" },
  { name: "JavaScript (ES6+) / TypeScript", percentage: 88, color: "#fbbf24" },
  { name: "HTML / CSS / Tailwind CSS", percentage: 90, color: "#f472b6" },
];

const techCategories = [
  {
    label: "Languages",
    color: "#a78bfa",
    items: [
      { name: "Python", icon: "fab fa-python", color: "#3b82f6" },
      { name: "JavaScript", icon: "fab fa-js", color: "#fbbf24" },
      { name: "TypeScript", imgUrl: "https://cdn.simpleicons.org/typescript/3178c6", color: "#3178c6" },
    ],
  },
  {
    label: "Frontend",
    color: "#60a5fa",
    items: [
      { name: "React.js", icon: "fab fa-react", color: "#61dafb" },
      { name: "HTML5", icon: "fab fa-html5", color: "#f97316" },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "#38bdf8" },
      { name: "Tailwind", imgUrl: "https://cdn.simpleicons.org/tailwindcss/06b6d4", color: "#06b6d4" },
    ],
  },
  {
    label: "Backend",
    color: "#4ade80",
    items: [
      { name: "Node.js", icon: "fab fa-node-js", color: "#4ade80" },
      { name: "Express", icon: "fas fa-server", color: "#94a3b8" },
      { name: "Fastify", imgUrl: "https://cdn.simpleicons.org/fastify/ffffff", color: "#e2e8f0" },
      { name: "Django", imgUrl: "https://cdn.simpleicons.org/django/22d3ee", color: "#22d3ee" },
    ],
  },
  {
    label: "Databases",
    color: "#fb923c",
    items: [
      { name: "PostgreSQL", imgUrl: "https://cdn.simpleicons.org/postgresql/60a5fa", color: "#60a5fa" },
      { name: "MongoDB", imgUrl: "https://cdn.simpleicons.org/mongodb/4ade80", color: "#4ade80" },
      { name: "MySQL", imgUrl: "https://cdn.simpleicons.org/mysql/f97316", color: "#f97316" },
    ],
  },
  {
    label: "ORM & Validation",
    color: "#c084fc",
    items: [
      { name: "Drizzle ORM", imgUrl: "https://cdn.simpleicons.org/drizzle/C5F74F", color: "#C5F74F" },
      { name: "Mongoose", icon: "fas fa-plug", color: "#34d399" },
      { name: "Zod", imgUrl: "https://cdn.simpleicons.org/zod/3068b7", color: "#6ea4f5" },
      { name: "Luna Modeler", icon: "fas fa-diagram-project", color: "#818cf8" },
    ],
  },
  {
    label: "DevOps & Deploy",
    color: "#38bdf8",
    items: [
      { name: "Git", icon: "fab fa-git-alt", color: "#f97316" },
      { name: "GitHub", icon: "fab fa-github", color: "#e2e8f0" },
      { name: "Vercel", imgUrl: "https://cdn.simpleicons.org/vercel/ffffff", color: "#e2e8f0" },
      { name: "Railway", imgUrl: "https://cdn.simpleicons.org/railway/7c3aed", color: "#7c3aed" },
      { name: "Firebase", imgUrl: "https://cdn.simpleicons.org/firebase/fb923c", color: "#fb923c" },
      { name: "Netlify", imgUrl: "https://cdn.simpleicons.org/netlify/22d3ee", color: "#22d3ee" },
    ],
  },
  {
    label: "Dev Tools & AI",
    color: "#f472b6",
    items: [
      { name: "VS Code", icon: "fas fa-code", color: "#2563eb" },
      { name: "Cursor", icon: "fas fa-wand-magic-sparkles", color: "#a78bfa" },
      { name: "Replit", icon: "fas fa-terminal", color: "#f97316" },
      { name: "GitHub Copilot", icon: "fab fa-github", color: "#94a3b8" },
      { name: "Claude AI", icon: "fas fa-robot", color: "#fb923c" },
    ],
  },
];

function SkillBar({ skill, index }: { skill: typeof backendSkills[0]; index: number }) {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setAnimatedWidth(skill.percentage), index * 80);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.percentage, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex justify-between mb-1.5">
        <span className="text-slate-300 text-sm font-medium font-mono">{skill.name}</span>
        <span className="text-sm font-mono" style={{ color: skill.color }}>{skill.percentage}%</span>
      </div>
      <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${animatedWidth}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-2 rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
        />
      </div>
    </motion.div>
  );
}

type TechItemData = { name: string; color: string; icon?: string; imgUrl?: string };

function TechItem({ item, index }: { item: TechItemData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -4 }}
      className="glass-card glass-card-hover flex flex-col items-center gap-1.5 p-3 rounded-xl cursor-pointer group"
    >
      {item.imgUrl ? (
        <img
          src={item.imgUrl}
          alt={item.name}
          className="w-7 h-7 object-contain transition-all duration-200 group-hover:scale-110"
          style={{ filter: `drop-shadow(0 0 6px ${item.color}50)` }}
        />
      ) : (
        <i
          className={`${item.icon} text-2xl transition-all duration-200 group-hover:scale-110`}
          style={{ color: item.color, filter: `drop-shadow(0 0 6px ${item.color}50)` }}
        />
      )}
      <span className="text-xs font-mono text-slate-400 group-hover:text-slate-200 transition-colors text-center leading-tight">{item.name}</span>
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
      <div className="mac-body text-xs">
        <div className="syn-comment mb-2">// Himanshu's full tech stack</div>
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
          <span className="syn-string">"Node"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"Express"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"Fastify"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"Django"</span>
          <span className="syn-bracket">],</span>
        </div>
        <div className="ml-4 mb-1">
          <span className="syn-type">db</span>
          <span className="syn-operator">: </span>
          <span className="syn-bracket">[</span>
          <span className="syn-string">"PostgreSQL"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"MongoDB"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"MySQL"</span>
          <span className="syn-bracket">],</span>
        </div>
        <div className="ml-4 mb-1">
          <span className="syn-type">orm</span>
          <span className="syn-operator">: </span>
          <span className="syn-bracket">[</span>
          <span className="syn-string">"Drizzle"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"Mongoose"</span>
          <span className="syn-bracket">],</span>
        </div>
        <div className="ml-4 mb-1">
          <span className="syn-type">deploy</span>
          <span className="syn-operator">: </span>
          <span className="syn-bracket">[</span>
          <span className="syn-string">"Railway"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"Vercel"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"Firebase"</span>
          <span className="syn-bracket">],</span>
        </div>
        <div className="ml-4">
          <span className="syn-type">validation</span>
          <span className="syn-operator">: </span>
          <span className="syn-string">"Zod"</span>
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-label mb-3">03. skills</div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text-purple">Skills & Stack</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Backend-first, full-stack capable — Node.js, Django, PostgreSQL, MongoDB, and React.
          </p>
        </motion.div>

        {/* Top section: skill bars + code block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold text-green-400 font-mono mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              Backend Skills
            </h3>
            {backendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}

            <h3 className="text-sm font-semibold text-blue-400 font-mono mt-7 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
              Frontend Skills
            </h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <SkillsCodeBlock />
          </motion.div>
        </div>

        {/* Tech category grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {techCategories.map((cat, catIdx) => (
            <div key={cat.label}>
              <h3
                className="text-xs font-mono font-semibold mb-4 flex items-center gap-2 uppercase tracking-widest"
                style={{ color: cat.color }}
              >
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: cat.color }} />
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item, i) => (
                  <TechItem key={item.name} item={item} index={catIdx * 5 + i} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        rel="stylesheet"
      />
    </section>
  );
}
