import { motion } from "framer-motion";
import InteractiveProfile from "../common/interactive-profile";
import TypingAnimation from "../common/typing-animation";
import profileImage from "@assets/profile-image-1.png";
import { ArrowDown, Github, Linkedin, Download } from "lucide-react";

function MacCodeBlock() {
  return (
    <div className="mac-window w-full">
      <div className="mac-titlebar">
        <div className="mac-dot mac-dot-red" />
        <div className="mac-dot mac-dot-yellow" />
        <div className="mac-dot mac-dot-green" />
        <span className="ml-3 text-xs text-slate-500 font-mono">himanshu.js</span>
      </div>
      <div className="mac-body text-xs">
        <div className="mb-1">
          <span className="syn-keyword">const</span>
          <span className="syn-var"> developer</span>
          <span className="syn-operator"> = </span>
          <span className="syn-bracket">{"{"}</span>
        </div>
        <div className="ml-4 mb-1">
          <span className="syn-type">name</span>
          <span className="syn-operator">: </span>
          <span className="syn-string">"Himanshu Bokde"</span>
          <span className="syn-bracket">,</span>
        </div>
        <div className="ml-4 mb-1">
          <span className="syn-type">focus</span>
          <span className="syn-operator">: </span>
          <span className="syn-string">"Backend Engineering"</span>
          <span className="syn-bracket">,</span>
        </div>
        <div className="ml-4 mb-1">
          <span className="syn-type">stack</span>
          <span className="syn-operator">: </span>
          <span className="syn-bracket">[</span>
          <span className="syn-string">"Node"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"Express"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"React"</span>
          <span className="syn-bracket">],</span>
        </div>
        <div className="ml-4 mb-1">
          <span className="syn-type">openToWork</span>
          <span className="syn-operator">: </span>
          <span className="syn-keyword">true</span>
        </div>
        <div className="mb-2">
          <span className="syn-bracket">{"}"}</span>
          <span className="syn-bracket">;</span>
        </div>
        <div>
          <span className="syn-function">module</span>
          <span className="syn-operator">.</span>
          <span className="syn-type">exports</span>
          <span className="syn-operator"> = </span>
          <span className="syn-var">developer</span>
          <span className="syn-bracket">;</span>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const handleScrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="midnight-bg min-h-screen relative overflow-hidden">
      <div className="particle w-96 h-96 top-[-8rem] left-[-8rem] bg-violet-600/10 blur-3xl animate-float-orb" />
      <div className="particle w-80 h-80 bottom-[-6rem] right-[-6rem] bg-blue-500/10 blur-3xl animate-float-orb" style={{ animationDelay: "3s" }} />

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(124,58,237,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.8) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-10 min-h-screen py-20">
        {/* Left: text */}
        <div className="flex-1 text-center lg:text-left max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label mb-3">
              {"<"} Open to backend & fullstack roles {"/>"}
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-3 leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text-purple text-glow-purple">
                Himanshu Bokde
              </span>
            </h1>

            <div className="text-xl mb-4 h-10 flex items-center justify-center lg:justify-start">
              <TypingAnimation
                roles={["Backend Developer", "Full Stack Engineer", "API Architect"]}
                baseText="I'm a"
                className="text-slate-300 font-mono"
              />
            </div>

            <p className="text-slate-400 text-base mb-7 leading-relaxed">
              I design and build scalable server-side systems, REST APIs, and full-stack web
              applications — turning complex requirements into clean, production-ready code.
            </p>

            <div className="flex flex-row gap-3 justify-center lg:justify-start mb-6">
              <button
                onClick={handleScrollToPortfolio}
                className="btn-midnight flex items-center gap-2 text-sm"
              >
                View Projects
                <ArrowDown size={14} />
              </button>
              <button
                onClick={handleScrollToContact}
                className="btn-midnight-outline flex items-center gap-2 text-sm"
              >
                Hire Me
              </button>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-violet-400 transition-all duration-300"
              >
                <Github size={17} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-300"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-violet-400 transition-colors duration-300 border-l border-white/10 pl-4"
              >
                <Download size={13} />
                Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: profile + code block */}
        <div className="flex-1 flex flex-col items-center gap-5 max-w-sm w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 blur-2xl opacity-25 scale-110" />
            <InteractiveProfile size={170} imageUrl={profileImage} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="w-full"
          >
            <MacCodeBlock />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600">
        <span className="text-xs font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </div>
    </section>
  );
}
