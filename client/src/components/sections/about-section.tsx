import { motion } from "framer-motion";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import InteractiveProfile from "../common/interactive-profile";
import profileImage2 from "@assets/profile-image-2.png";
import { MapPin, GraduationCap, Briefcase, Coffee } from "lucide-react";

const stats = [
  { target: 50, label: "Projects Completed", icon: Briefcase },
  { target: 5, label: "Years Experience", icon: GraduationCap },
  { target: 30, label: "Happy Clients", icon: Coffee },
  { target: 100, label: "Cups of Coffee", icon: Coffee },
];

function StatCard({ target, label, icon: Icon }: { target: number; label: string; icon: any }) {
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
        <span className="ml-3 text-xs text-slate-500 font-mono">about_me.json</span>
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
          <span className="syn-string">"Data Scientist & AI/ML Engineer"</span>
          <span className="syn-bracket">,</span>
        </div>
        <div className="ml-4">
          <span className="syn-string">"location"</span>
          <span className="syn-operator">: </span>
          <span className="syn-string">"Nagpur, Maharashtra, India"</span>
          <span className="syn-bracket">,</span>
        </div>
        <div className="ml-4">
          <span className="syn-string">"education"</span>
          <span className="syn-operator">: </span>
          <span className="syn-string">"B.Tech in Data Science"</span>
          <span className="syn-bracket">,</span>
        </div>
        <div className="ml-4">
          <span className="syn-string">"interests"</span>
          <span className="syn-operator">: </span>
          <span className="syn-bracket">[</span>
        </div>
        <div className="ml-8">
          <span className="syn-string">"Machine Learning"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"Deep Learning"</span>
          <span className="syn-bracket">,</span>
        </div>
        <div className="ml-8">
          <span className="syn-string">"Data Analysis"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"Open Source"</span>
        </div>
        <div className="ml-4">
          <span className="syn-bracket">]</span>
          <span className="syn-bracket">,</span>
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
      {/* Background orbs */}
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
            A passionate technologist who turns data into decisions and models into impact.
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
              Building Intelligent Systems
            </h3>

            <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
              <MapPin size={14} className="text-violet-400" />
              <span>Nagpur, Maharashtra, India</span>
            </div>

            <p className="text-slate-400 leading-relaxed mb-4">
              I'm a Data Scientist and AI/ML Engineer with a deep passion for extracting
              meaningful insights from complex datasets. My work spans the full spectrum
              from exploratory data analysis to deploying production-ready ML models.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              When I'm not training models or writing Python, I'm exploring the latest
              research in deep learning, contributing to open-source projects, and
              building tools that make data more accessible to everyone.
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
                  <StatCard target={stat.target} label={stat.label} icon={stat.icon} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
