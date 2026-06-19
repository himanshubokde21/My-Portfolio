import { motion } from "framer-motion";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import InteractiveProfile from "../common/interactive-profile";
import profileImage2 from "@assets/profile-image-2.png";
import { MapPin, Server, Database, Globe } from "lucide-react";

const stats = [
  { target: 40, label: "Projects Shipped", icon: Globe },
  { target: 3, label: "Years Experience", icon: Server },
  { target: 15, label: "APIs Built", icon: Database },
  { target: 8, label: "Happy Clients", icon: Globe },
];

function StatCard({ target, label }: { target: number; label: string }) {
  const { count, ref } = useCounterAnimation(target);
  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05, y: -4 }}
      className="glass-card glass-card-hover p-5 rounded-xl text-center"
    >
      <div className="text-3xl font-bold gradient-text-purple mb-1">
        {count}<span className="text-violet-400">+</span>
      </div>
      <div className="text-slate-400 text-sm">{label}</div>
    </motion.div>
  );
}

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
          <span className="syn-string">"Full Stack Developer (Backend Focus)"</span>
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
            A backend-first developer who loves building systems that scale — from REST APIs to full-stack web apps.
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

          {/* Right: bio + stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              Building for the Server Room First
            </h3>

            <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
              <MapPin size={14} className="text-violet-400" />
              <span>Nagpur, Maharashtra, India</span>
            </div>

            <p className="text-slate-400 leading-relaxed mb-4">
              I'm a Full Stack Web Developer with a strong emphasis on backend engineering.
              My core strength is designing and building scalable REST APIs, microservices,
              and server-side architectures using Node.js, Express, and PostgreSQL.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              On the frontend, I work with React and TypeScript to deliver clean, functional
              interfaces — but my passion lies in what happens behind the scenes: database
              design, authentication flows, API performance, and system reliability.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Whether it's a greenfield project or a legacy system that needs refactoring,
              I write code that is readable, tested, and built to last.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <StatCard target={stat.target} label={stat.label} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
