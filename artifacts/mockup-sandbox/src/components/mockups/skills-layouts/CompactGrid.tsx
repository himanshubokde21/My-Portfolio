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

function Badge({ item }: { item: TechBadge }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 14px",
        borderRadius: "9999px",
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${item.color}30`,
        cursor: "default",
        transition: "all 0.2s",
        whiteSpace: "nowrap",
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
        <img src={item.imgUrl} alt={item.name} style={{ width: 16, height: 16, objectFit: "contain", filter: `drop-shadow(0 0 4px ${item.color}60)` }} />
      ) : (
        <i className={item.icon} style={{ color: item.color, fontSize: 15, filter: `drop-shadow(0 0 4px ${item.color}60)` }} />
      )}
      <span style={{ fontSize: 13, color: "#cbd5e1", fontFamily: "monospace" }}>{item.name}</span>
    </div>
  );
}

export function CompactGrid() {
  return (
    <div style={{ minHeight: "100vh", background: "#0b0f1a", padding: "60px 48px", fontFamily: "system-ui, sans-serif" }}>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" rel="stylesheet" />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 52 }}>
        <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#6366f1", fontFamily: "monospace", textTransform: "uppercase", marginBottom: 10 }}>03. skills</div>
        <h2 style={{ fontSize: 42, fontWeight: 800, margin: 0, background: "linear-gradient(135deg, #818cf8, #c084fc, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Skills &amp; Stack
        </h2>
        <p style={{ color: "#64748b", marginTop: 12, fontSize: 15 }}>Backend-first · Full-stack capable</p>
      </div>

      {/* Category rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 900, margin: "0 auto" }}>
        {allTech.map(cat => (
          <div key={cat.category}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: cat.accent }} />
              <span style={{ fontSize: 11, fontFamily: "monospace", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: cat.accent }}>
                {cat.category}
              </span>
              <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${cat.accent}30, transparent)` }} />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {cat.items.map(item => <Badge key={item.name} item={item} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
