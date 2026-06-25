import { motion } from "framer-motion";
import InteractiveProfile from "../common/interactive-profile";
import profileImage2 from "@assets/profile-image-2.png";
import { MapPin, Code2, BookOpen, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Backend Focus", desc: "Node.js · Express · PostgreSQL", accent: "#7c3aed" },
  { icon: BookOpen, label: "CS Student", desc: "Learning by building real projects", accent: "#2563eb" },
  { icon: Rocket, label: "Open to Work", desc: "Internships & entry-level roles", accent: "#0891b2" },
];

function AboutCodeBlock() {
  return (
    <div className="mac-window w-full">
      <div className="mac-titlebar">
        <div className="mac-dot mac-dot-red" />
        <div className="mac-dot mac-dot-yellow" />
        <div className="mac-dot mac-dot-green" />
        <span className="ml-3 text-xs text-slate-500 font-mono">about.json</span>
      </div>
      <div className="mac-body">
        <div><span className="syn-bracket">{"{"}</span></div>
        <div className="ml-4">
          <span className="syn-string">"name"</span>
          <span className="syn-operator">: </span>
          <span className="syn-string">"Himanshu Bokde"</span>
          <span className="syn-bracket">,</span>
        </div>
        <div className="ml-4">
          <span className="syn-string">"role"</span>
          <span className="syn-operator">: </span>
          <span className="syn-string">"CS Student & Backend Developer"</span>
          <span className="syn-bracket">,</span>
        </div>
        <div className="ml-4">
          <span className="syn-string">"location"</span>
          <span className="syn-operator">: </span>
          <span className="syn-string">"Nagpur, Maharashtra, India"</span>
          <span className="syn-bracket">,</span>
        </div>
        <div className="ml-4">
          <span className="syn-string">"backend"</span>
          <span className="syn-operator">: </span>
          <span className="syn-bracket">[</span>
          <span className="syn-string">"Node.js"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"Express"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"PostgreSQL"</span>
          <span className="syn-bracket">],</span>
        </div>
        <div className="ml-4">
          <span className="syn-string">"frontend"</span>
          <span className="syn-operator">: </span>
          <span className="syn-bracket">[</span>
          <span className="syn-string">"React"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"TypeScript"</span>
          <span className="syn-bracket">],</span>
        </div>
        <div className="ml-4">
          <span className="syn-string">"available"</span>
          <span className="syn-operator">: </span>
          <span className="syn-keyword">true</span>
        </div>
        <div><span className="syn-bracket">{"}"}</span></div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 midnight-bg relative overflow-hidden">
      <div className="particle w-72 h-72 top-20 right-[-6rem] bg-blue-600/8 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mb-3">01. about</div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text-purple">About Me</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A CS student who loves building real-world projects — from REST APIs to full-stack web apps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: profile + code block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 blur-2xl opacity-20 scale-110" />
              <InteractiveProfile size={180} imageUrl={profileImage2} />
            </div>
            <AboutCodeBlock />
          </motion.div>

          {/* Right: bio + highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              Student. Builder. Backend Enthusiast.
            </h3>

            <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
              <MapPin size={14} className="text-violet-400" />
              <span>Nagpur, Maharashtra, India</span>
            </div>

            <p className="text-slate-400 leading-relaxed mb-4">
              I'm a Computer Science student with a strong passion for backend development.
              I build real projects to learn — REST APIs, full-stack apps, and AI-powered tools
              using Node.js, Express, and PostgreSQL.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              On the frontend, I work with React and TypeScript to build functional interfaces,
              but what excites me most is the backend: designing clean APIs, handling auth flows,
              and structuring databases the right way.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              I'm actively looking for internships and entry-level opportunities where I can
              contribute, learn from experienced engineers, and grow as a developer.
            </p>

            <div className="grid grid-cols-1 gap-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                    className="glass-card glass-card-hover flex items-center gap-4 p-4 rounded-xl"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.accent}20` }}
                    >
                      <Icon size={18} style={{ color: item.accent }} />
                    </div>
                    <div>
                      <div className="text-slate-200 text-sm font-semibold">{item.label}</div>
                      <div className="text-slate-500 text-xs font-mono">{item.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
