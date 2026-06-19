import { motion } from "framer-motion";

type TechBadge = { name: string; icon?: string; imgUrl?: string; color: string };

const allTech: { category: string; accent: string; items: TechBadge[] }[] = [
  {
    category: "Languages",
    accent: "#a78bfa",
    items: [
      { name: "Python", icon: "fab fa-python", color: "#3b82f6" },
      { name: "JavaScript", icon: "fab fa-js", color: "#fbbf24" },
      { name: "TypeScript", imgUrl: "https://cdn.simpleicons.org/typescript/3178c6", color: "#3178c6" },
    ],
  },
  {
    category: "Frontend",
    accent: "#60a5fa",
    items: [
      { name: "React.js", icon: "fab fa-react", color: "#61dafb" },
      { name: "HTML5", icon: "fab fa-html5", color: "#f97316" },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "#38bdf8" },
      { name: "Tailwind", imgUrl: "https://cdn.simpleicons.org/tailwindcss/06b6d4", color: "#06b6d4" },
    ],
  },
  {
    category: "Backend",
    accent: "#4ade80",
    items: [
      { name: "Node.js", icon: "fab fa-node-js", color: "#4ade80" },
      { name: "Express", icon: "fas fa-server", color: "#94a3b8" },
      { name: "Fastify", imgUrl: "https://cdn.simpleicons.org/fastify/ffffff", color: "#e2e8f0" },
      { name: "Django", imgUrl: "https://cdn.simpleicons.org/django/22d3ee", color: "#22d3ee" },
    ],
  },
  {
    category: "Databases",
    accent: "#fb923c",
    items: [
      { name: "PostgreSQL", imgUrl: "https://cdn.simpleicons.org/postgresql/60a5fa", color: "#60a5fa" },
      { name: "MongoDB", imgUrl: "https://cdn.simpleicons.org/mongodb/4ade80", color: "#4ade80" },
      { name: "MySQL", imgUrl: "https://cdn.simpleicons.org/mysql/f97316", color: "#f97316" },
    ],
  },
  {
    category: "ORM & Validation",
    accent: "#c084fc",
    items: [
      { name: "Drizzle ORM", imgUrl: "https://cdn.simpleicons.org/drizzle/C5F74F", color: "#C5F74F" },
      { name: "Mongoose", icon: "fas fa-plug", color: "#34d399" },
      { name: "Zod", imgUrl: "https://cdn.simpleicons.org/zod/3068b7", color: "#6ea4f5" },
      { name: "Luna Modeler", icon: "fas fa-diagram-project", color: "#818cf8" },
    ],
  },
  {
    category: "DevOps & Deploy",
    accent: "#38bdf8",
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
    category: "Dev Tools & AI",
    accent: "#f472b6",
    items: [
      { name: "VS Code", icon: "fas fa-code", color: "#2563eb" },
      { name: "Cursor", icon: "fas fa-wand-magic-sparkles", color: "#a78bfa" },
      { name: "Replit", icon: "fas fa-terminal", color: "#f97316" },
      { name: "GitHub Copilot", icon: "fab fa-github", color: "#94a3b8" },
      { name: "Claude AI", icon: "fas fa-robot", color: "#fb923c" },
    ],
  },
];

function TechBadgeItem({ item, index }: { item: TechBadge; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: index * 0.04 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.06 }}
      className="flex items-center gap-2 px-3.5 py-2 rounded-full cursor-default transition-all duration-200 whitespace-nowrap"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${item.color}30`,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.background = `${item.color}15`;
        (e.currentTarget as HTMLDivElement).style.borderColor = `${item.color}60`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
        (e.currentTarget as HTMLDivElement).style.borderColor = `${item.color}30`;
      }}
    >
      {item.imgUrl ? (
        <img
          src={item.imgUrl}
          alt={item.name}
          className="w-4 h-4 object-contain"
          style={{ filter: `drop-shadow(0 0 4px ${item.color}60)` }}
        />
      ) : (
        <i
          className={item.icon}
          style={{ color: item.color, fontSize: 15, filter: `drop-shadow(0 0 4px ${item.color}60)` }}
        />
      )}
      <span className="text-slate-300 text-sm font-mono">{item.name}</span>
    </motion.div>
  );
}

function CategoryRow({
  cat,
  rowIndex,
}: {
  cat: (typeof allTech)[0];
  rowIndex: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: rowIndex * 0.06 }}
      viewport={{ once: true }}
    >
      {/* Category header */}
      <div className="flex items-center gap-2.5 mb-3.5">
        <div
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ background: cat.accent }}
        />
        <span
          className="text-[11px] font-mono font-semibold tracking-[0.15em] uppercase"
          style={{ color: cat.accent }}
        >
          {cat.category}
        </span>
        <div
          className="flex-1 h-px"
          style={{
            background: `linear-gradient(90deg, ${cat.accent}30, transparent)`,
          }}
        />
      </div>

      {/* Badge row */}
      <div className="flex flex-wrap gap-2">
        {cat.items.map((item, i) => (
          <TechBadgeItem key={item.name} item={item} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 midnight-bg relative overflow-hidden">
      {/* Ambient glow */}
      <div className="particle w-96 h-96 bottom-0 left-[-6rem] bg-violet-600/8 blur-3xl" />
      <div className="particle w-72 h-72 top-20 right-[-4rem] bg-blue-600/6 blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-label mb-3">03. skills</div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text-purple">Skills &amp; Stack</span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Backend-first · Full-stack capable
          </p>
        </motion.div>

        {/* Category rows */}
        <div className="flex flex-col gap-8">
          {allTech.map((cat, i) => (
            <CategoryRow key={cat.category} cat={cat} rowIndex={i} />
          ))}
        </div>
      </div>

      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        rel="stylesheet"
      />
    </section>
  );
}
