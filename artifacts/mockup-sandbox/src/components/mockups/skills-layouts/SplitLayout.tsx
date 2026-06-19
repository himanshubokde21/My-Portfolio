import { useState, useEffect, useRef } from "react";

type Tech = { name: string; icon?: string; imgUrl?: string; color: string };

const proficiencies = [
  { label: "Node.js · Express · Fastify", pct: 90, color: "#4ade80" },
  { label: "REST APIs · Zod · Drizzle ORM", pct: 92, color: "#a78bfa" },
  { label: "PostgreSQL · MongoDB · MySQL", pct: 88, color: "#60a5fa" },
  { label: "React.js · TypeScript", pct: 85, color: "#61dafb" },
  { label: "Django · Python", pct: 78, color: "#22d3ee" },
];

const categories: { label: string; accent: string; items: Tech[] }[] = [
  {
    label: "Languages",
    accent: "#a78bfa",
    items: [
      { name: "Python", icon: "fab fa-python", color: "#3b82f6" },
      { name: "JavaScript", icon: "fab fa-js", color: "#fbbf24" },
      { name: "TypeScript", imgUrl: "https://cdn.simpleicons.org/typescript/3178c6", color: "#3178c6" },
    ],
  },
  {
    label: "Frontend",
    accent: "#60a5fa",
    items: [
      { name: "React", icon: "fab fa-react", color: "#61dafb" },
      { name: "HTML5", icon: "fab fa-html5", color: "#f97316" },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "#38bdf8" },
      { name: "Tailwind", imgUrl: "https://cdn.simpleicons.org/tailwindcss/06b6d4", color: "#06b6d4" },
    ],
  },
  {
    label: "Backend",
    accent: "#4ade80",
    items: [
      { name: "Node.js", icon: "fab fa-node-js", color: "#4ade80" },
      { name: "Express", icon: "fas fa-server", color: "#94a3b8" },
      { name: "Fastify", imgUrl: "https://cdn.simpleicons.org/fastify/ffffff", color: "#e2e8f0" },
      { name: "Django", imgUrl: "https://cdn.simpleicons.org/django/22d3ee", color: "#22d3ee" },
    ],
  },
  {
    label: "Databases",
    accent: "#fb923c",
    items: [
      { name: "PostgreSQL", imgUrl: "https://cdn.simpleicons.org/postgresql/60a5fa", color: "#60a5fa" },
      { name: "MongoDB", imgUrl: "https://cdn.simpleicons.org/mongodb/4ade80", color: "#4ade80" },
      { name: "MySQL", imgUrl: "https://cdn.simpleicons.org/mysql/f97316", color: "#f97316" },
    ],
  },
  {
    label: "ORM & Validation",
    accent: "#c084fc",
    items: [
      { name: "Drizzle ORM", imgUrl: "https://cdn.simpleicons.org/drizzle/C5F74F", color: "#C5F74F" },
      { name: "Mongoose", icon: "fas fa-plug", color: "#34d399" },
      { name: "Zod", imgUrl: "https://cdn.simpleicons.org/zod/3068b7", color: "#6ea4f5" },
      { name: "Luna Modeler", icon: "fas fa-diagram-project", color: "#818cf8" },
    ],
  },
  {
    label: "DevOps & Deploy",
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
    label: "Dev Tools & AI",
    accent: "#f472b6",
    items: [
      { name: "VS Code", icon: "fas fa-code", color: "#2563eb" },
      { name: "Cursor", icon: "fas fa-wand-magic-sparkles", color: "#a78bfa" },
      { name: "Replit", icon: "fas fa-terminal", color: "#f97316" },
      { name: "Copilot", icon: "fab fa-github", color: "#94a3b8" },
      { name: "Claude AI", icon: "fas fa-robot", color: "#fb923c" },
    ],
  },
];

function Bar({ label, pct, color, delay }: { label: string; pct: number; color: string; delay: number }) {
  const [w, setW] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setW(pct), delay);
    return () => clearTimeout(t);
  }, [pct, delay]);

  return (
    <div ref={ref} style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: 12, color: "#94a3b8", fontFamily: "monospace" }}>{label}</span>
        <span style={{ fontSize: 12, fontFamily: "monospace", color }}>{pct}%</span>
      </div>
      <div style={{ height: 5, borderRadius: 9999, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
        <div style={{
          height: "100%", borderRadius: 9999,
          background: `linear-gradient(90deg, ${color}70, ${color})`,
          width: `${w}%`,
          transition: "width 0.6s ease-out",
        }} />
      </div>
    </div>
  );
}

function TechChip({ item }: { item: Tech }) {
  return (
    <div title={item.name} style={{
      display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
      padding: "10px 8px", minWidth: 54, cursor: "default",
      borderRadius: 10,
      background: "rgba(255,255,255,0.03)",
      border: `1px solid rgba(255,255,255,0.05)`,
      transition: "background 0.15s",
    }}
      onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = `${item.color}10`}
      onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)"}
    >
      {item.imgUrl
        ? <img src={item.imgUrl} alt={item.name} style={{ width: 20, height: 20, objectFit: "contain" }} />
        : <i className={item.icon} style={{ color: item.color, fontSize: 18 }} />
      }
      <span style={{ fontSize: 9, color: "#64748b", fontFamily: "monospace", textAlign: "center", lineHeight: 1.3 }}>{item.name}</span>
    </div>
  );
}

export function SplitLayout() {
  return (
    <div style={{ minHeight: "100vh", background: "#0b0f1a", padding: "56px 44px", fontFamily: "system-ui, sans-serif" }}>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" rel="stylesheet" />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#6366f1", fontFamily: "monospace", textTransform: "uppercase", marginBottom: 10 }}>03. skills</div>
        <h2 style={{ fontSize: 40, fontWeight: 800, margin: 0, background: "linear-gradient(135deg, #818cf8, #c084fc, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Skills &amp; Stack
        </h2>
        <p style={{ color: "#64748b", marginTop: 10, fontSize: 15 }}>Backend-first · Full-stack capable</p>
      </div>

      {/* 2-column body */}
      <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: 48, maxWidth: 1000, margin: "0 auto" }}>
        {/* LEFT — proficiency bars */}
        <div>
          <div style={{ marginBottom: 22 }}>
            <span style={{ fontSize: 11, fontFamily: "monospace", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#4ade80" }}>
              ● Core Proficiency
            </span>
          </div>
          {proficiencies.map((p, i) => (
            <Bar key={p.label} label={p.label} pct={p.pct} color={p.color} delay={i * 90} />
          ))}

          {/* Mini terminal card */}
          <div style={{
            marginTop: 28,
            background: "#0d1117",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12,
            overflow: "hidden",
          }}>
            <div style={{ background: "#161b22", padding: "8px 14px", display: "flex", gap: 7, alignItems: "center" }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
              <span style={{ marginLeft: 8, fontSize: 11, color: "#4b5563", fontFamily: "monospace" }}>stack.json</span>
            </div>
            <div style={{ padding: "14px 16px", fontFamily: "monospace", fontSize: 11, lineHeight: 1.8, color: "#4b5563" }}>
              <span style={{ color: "#4b5563" }}>{"{"}</span><br />
              &nbsp;&nbsp;<span style={{ color: "#60a5fa" }}>"focus"</span><span style={{ color: "#4b5563" }}>: </span><span style={{ color: "#4ade80" }}>"Backend"</span><span>,</span><br />
              &nbsp;&nbsp;<span style={{ color: "#60a5fa" }}>"lang"</span><span style={{ color: "#4b5563" }}>: </span><span style={{ color: "#4ade80" }}>"Node · Python"</span><span>,</span><br />
              &nbsp;&nbsp;<span style={{ color: "#60a5fa" }}>"db"</span><span style={{ color: "#4b5563" }}>: </span><span style={{ color: "#4ade80" }}>"PG · Mongo · MySQL"</span><br />
              <span style={{ color: "#4b5563" }}>{"}"}</span>
            </div>
          </div>
        </div>

        {/* RIGHT — categorized chips */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {categories.map(cat => (
            <div key={cat.label}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <span style={{ fontSize: 11, fontFamily: "monospace", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: cat.accent }}>
                  {cat.label}
                </span>
                <div style={{ flex: 1, height: "1px", background: `linear-gradient(90deg, ${cat.accent}25, transparent)` }} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {cat.items.map(item => <TechChip key={item.name} item={item} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
