import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

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
      className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors duration-300"
    >
      <div className="text-3xl font-bold text-primary mb-2">{count}</div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate developer with 5+ years of experience creating digital solutions that bridge the gap between design and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              whileHover={{ rotate: 0 }}
              className="w-full h-96 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-2xl transform rotate-3 transition-transform duration-500"
            >
              <div className="absolute inset-4 bg-gray-200 rounded-xl flex items-center justify-center">
                <User className="text-6xl text-gray-400" size={96} />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Creating Digital Experiences</h3>
            <p className="text-lg text-gray-600 mb-6">
              I'm a full-stack developer based in San Francisco, specializing in building exceptional digital experiences.
              I combine technical expertise with creative problem-solving to deliver solutions that exceed expectations.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or hiking the beautiful trails around the Bay Area.
            </p>

            <div className="grid grid-cols-2 gap-6">
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
