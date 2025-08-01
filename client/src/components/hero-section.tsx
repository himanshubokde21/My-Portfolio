import { motion } from "framer-motion";
import SparkleButton from "./sparkle-button";
import InteractiveProfile from "./interactive-profile";

export default function HeroSection() {
  const handleScrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="gradient-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-32 right-20 w-16 h-16 bg-white/10 rounded-full"
      />
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-10 w-12 h-12 bg-white/10 rounded-full"
      />

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto mb-6"
            >
              <InteractiveProfile 
                size={200}
                imageUrl="/profile-avatar.svg"
              />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          >
            Hi, I'm <span className="bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">Alex Chen</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl mb-8 h-16 flex items-center justify-center"
          >
            <span className="typing-text font-light">Full Stack Developer & UI/UX Designer</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90"
          >
            I create beautiful, functional, and user-centered digital experiences that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <SparkleButton
              onClick={handleScrollToPortfolio}
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100"
            >
              View My Work
            </SparkleButton>
            <SparkleButton
              onClick={handleScrollToContact}
              variant="outline"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary"
            >
              Get In Touch
            </SparkleButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
