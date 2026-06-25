import { motion } from "framer-motion";
import { Trophy, BookOpen, Code2, Cpu, Globe, Flame } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    accent: "#f59e0b",
    title: "1st Runner-Up — HACKxPBCOE",
    desc: "Secured 1st Runner-Up at the HACKxPBCOE Hackathon — competed and placed in a real college-level hackathon.",
    tag: "Hackathon",
  },
  {
    icon: Code2,
    accent: "#ef4444",
    title: "500+ DSA Problems · LeetCode 1600+",
    desc: "Solved 500+ problems on LeetCode with a highest rating of 1600+ — consistently grinding arrays, trees, and DP.",
    tag: "LeetCode",
  },
  {
    icon: Globe,
    accent: "#0891b2",
    title: "Citizen Auditor AI — Live",
    desc: "Built a smart civic complaint platform with geo-tagged reports, role-based workflow, analytics dashboard, and multi-language support.",
    tag: "Shipped",
  },
  {
    icon: Flame,
    accent: "#7c3aed",
    title: "15+ Projects Built Since 2024",
    desc: "Started coding in 2024 and shipped 15+ full-stack and backend projects — all built from scratch, solo.",
    tag: "Builder",
  },
];

const learning = [
  {
    icon: Code2,
    accent: "#ef4444",
    title: "Data Structures & Algorithms",
    desc: "500+ problems solved, LeetCode rating 1600+ — daily practice on arrays, trees, graphs, and dynamic programming.",
    progress: 75,
  },
  {
    icon: Cpu,
    accent: "#7c3aed",
    title: "System Design",
    desc: "Learning how to design scalable systems — load balancing, caching, DB sharding, and distributed architecture.",
    progress: 40,
  },
];

function AchievementCard({ item, index }: { item: typeof achievements[0]; index: number }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ x: 4 }}
      className="glass-card glass-card-hover flex items-start gap-4 p-4 rounded-xl"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ background: `${item.accent}20` }}
      >
        <Icon size={17} style={{ color: item.accent }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span className="text-slate-200 text-sm font-semibold">{item.title}</span>
          <span
            className="text-xs font-mono px-2 py-0.5 rounded-full"
            style={{ background: `${item.accent}20`, color: item.accent }}
          >
            {item.tag}
          </span>
        </div>
        <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
}

function LearningCard({ item, index }: { item: typeof learning[0]; index: number }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card p-4 rounded-xl"
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: `${item.accent}20` }}
        >
          <Icon size={15} style={{ color: item.accent }} />
        </div>
        <span className="text-slate-200 text-sm font-semibold">{item.title}</span>
      </div>
      <p className="text-slate-500 text-xs leading-relaxed mb-3">{item.desc}</p>
      <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${item.progress}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${item.accent}, ${item.accent}80)` }}
        />
      </div>
      <div className="text-right mt-1">
        <span className="text-xs font-mono" style={{ color: item.accent }}>{item.progress}%</span>
      </div>
    </motion.div>
  );
}

export default function JourneySection() {
  return (
    <section id="journey" className="py-20 relative overflow-hidden" style={{ background: "hsl(222,47%,9%)" }}>
      <div className="particle w-80 h-80 top-[-4rem] left-[-6rem] bg-violet-600/8 blur-3xl" />
      <div className="particle w-64 h-64 bottom-[-4rem] right-[-4rem] bg-blue-500/8 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mb-3">03. journey</div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text-purple">Achievements & Learning</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            What I've shipped so far — and what I'm actively levelling up on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Achievements */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                <Trophy size={16} className="text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 font-mono">
                <span className="syn-comment">// achievements</span>
              </h3>
            </motion.div>
            <div className="flex flex-col gap-3">
              {achievements.map((item, index) => (
                <AchievementCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Right: Currently Learning */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
                <BookOpen size={16} className="text-violet-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 font-mono">
                <span className="syn-comment">// currently_learning</span>
              </h3>
            </motion.div>
            <div className="flex flex-col gap-3">
              {learning.map((item, index) => (
                <LearningCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
