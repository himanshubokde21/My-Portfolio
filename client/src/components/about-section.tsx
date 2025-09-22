import { motion } from "framer-motion";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import InteractiveProfile from "./interactive-profile";
import profileImage2 from "@assets/profile-image-2.png";

const stats = [
  { target: 50, label: "Projects Completed" },
  { target: 5, label: "Years Experience" },
  { target: 30, label: "Happy Clients" },
  { target: 100, label: "Cups of Coffee" },
];

function StatCard({ target, label }: { target: number; label: string }) {
  const { count, ref } = useCounterAnimation(target);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors duration-300"
    >
      <div className="text-3xl font-bold text-primary mb-2">{count}</div>
      <div className="text-gray-600 dark:text-gray-400">{label}</div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate developer with 5+ years of experience creating digital solutions that bridge the gap between design and technology.
          </p>
        </motion.div>

        {/* Centered Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <InteractiveProfile 
            size={180}
            imageUrl={profileImage2}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Creating Digital Experiences</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a full-stack developer based in San Francisco, specializing in building exceptional digital experiences.
              I combine technical expertise with creative problem-solving to deliver solutions that exceed expectations.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or hiking the beautiful trails around the Bay Area.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">
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
