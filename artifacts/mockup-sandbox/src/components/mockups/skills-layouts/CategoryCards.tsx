type TechItem = { name: string; icon?: string; imgUrl?: string; color: string };

const categories: { label: string; accent: string; emoji: string; items: TechItem[] }[] = [
  {
    label: "Languages",
    accent: "#a78bfa",
    emoji: "{ }",
    items: [
      { name: "Python", icon: "fab fa-python", color: "#3b82f6" },
      { name: "JavaScript", icon: "fab fa-js", color: "#fbbf24" },
      { name: "TypeScript", imgUrl: "https://cdn.simpleicons.org/typescript/3178c6", color: "#3178c6" },
    ],
  },
  {
    label: "Frontend",
    accent: "#60a5fa",
    emoji: "</>",
    items: [
      { name: "React.js", icon: "fab fa-react", color: "#61dafb" },
      { name: "HTML5", icon: "fab fa-html5", color: "#f97316" },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "#38bdf8" },
      { name: "Tailwind", imgUrl: "https://cdn.simpleicons.org/tailwindcss/06b6d4", color: "#06b6d4" },
    ],
  },
  {
    label: "Backend",
    accent: "#4ade80",
    emoji: "⚙",
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
    emoji: "◎",
    items: [
      { name: "PostgreSQL", imgUrl: "https://cdn.simpleicons.org/postgresql/60a5fa", color: "#60a5fa" },
      { name: "MongoDB", imgUrl: "https://cdn.simpleicons.org/mongodb/4ade80", color: "#4ade80" },
      { name: "MySQL", imgUrl: "https://cdn.simpleicons.org/mysql/f97316", color: "#f97316" },
    ],
  },
  {
    label: "ORM & Validation",
    accent: "#c084fc",
    emoji: "✦",
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
    emoji: "↑",
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
    emoji: "✦",
    items: [
      { name: "VS Code", icon: "fas fa-code", color: "#2563eb" },
      { name: "Cursor", icon: "fas fa-wand-magic-sparkles", color: "#a78bfa" },
      { name: "Replit", icon: "fas fa-terminal", color: "#f97316" },
      { name: "Copilot", icon: "fab fa-github", color: "#94a3b8" },
      { name: "Claude AI", icon: "fas fa-robot", color: "#fb923c" },
    ],
  },
];

function TechIcon({ item }: { item: TechItem }) {
  return (
    <div title={item.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "default" }}>
      <div style={{
        width: 44, height: 44,
        borderRadius: 12,
        background: `${item.color}12`,
        border: `1px solid ${item.color}25`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {item.imgUrl
          ? <img src={item.imgUrl} alt={item.name} style={{ width: 22, height: 22, objectFit: "contain" }} />
          : <i className={item.icon} style={{ color: item.color, fontSize: 20 }} />
        }
      </div>
      <span style={{ fontSize: 10, color: "#64748b", fontFamily: "monospace", textAlign: "center", maxWidth: 52, lineHeight: 1.3 }}>{item.name}</span>
    </div>
  );
}

export function CategoryCards() {
  return (
    <div style={{ minHeight: "100vh", background: "#0b0f1a", padding: "56px 40px", fontFamily: "system-ui, sans-serif" }}>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" rel="stylesheet" />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#6366f1", fontFamily: "monospace", textTransform: "uppercase", marginBottom: 10 }}>03. skills</div>
        <h2 style={{ fontSize: 40, fontWeight: 800, margin: 0, background: "linear-gradient(135deg, #818cf8, #c084fc, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Skills &amp; Stack
        </h2>
        <p style={{ color: "#64748b", marginTop: 10, fontSize: 15 }}>Backend-first · Full-stack capable</p>
      </div>

      {/* Card Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20, maxWidth: 980, margin: "0 auto" }}>
        {categories.map(cat => (
          <div key={cat.label} style={{
            background: "rgba(255,255,255,0.025)",
            border: `1px solid ${cat.accent}20`,
            borderRadius: 16,
            padding: "22px 20px",
            backdropFilter: "blur(8px)",
            transition: "border-color 0.2s, background 0.2s",
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = `${cat.accent}45`;
              (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = `${cat.accent}20`;
              (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.025)";
            }}
          >
            {/* Card header */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
              <div style={{
                width: 30, height: 30, borderRadius: 8,
                background: `${cat.accent}18`,
                border: `1px solid ${cat.accent}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, color: cat.accent, fontFamily: "monospace", fontWeight: 700,
              }}>
                {cat.emoji}
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, color: cat.accent, fontFamily: "monospace", letterSpacing: "0.08em" }}>
                {cat.label}
              </span>
            </div>
            {/* Icons row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {cat.items.map(item => <TechIcon key={item.name} item={item} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
