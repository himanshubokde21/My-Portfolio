import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const technicalSkills = [
  { name: "Data Science & Analysis", percentage: 92 },
  { name: "Python / Machine Learning", percentage: 90 },
  { name: "SQL / Database Management", percentage: 88 },
  { name: "Web Development", percentage: 85 },
  { name: "Power BI / Data Visualization", percentage: 80 },

];

const technologies = [
  { name: "Python", icon: "fab fa-python", color: "text-blue-600" },

  // Replace SQL + MongoDB with a single "Database" using the same SQL (database) icon
  { name: "Database", icon: "fas fa-database", color: "text-blue-500" },

  // Rename Power BI to Power BI / Tableau
  { name: "Power BI / Tableau", icon: "fas fa-chart-bar", color: "text-yellow-500" },

  { name: "Machine Learning", icon: "fas fa-brain", color: "text-purple-600" },
  { name: "Data Analysis", icon: "fas fa-chart-line", color: "text-green-500" },
  { name: "AI/ML", icon: "fas fa-robot", color: "text-red-500" },

  // Replace HTML/CSS with Web Development and choose a matching FA solid icon
  { name: "Web Development", icon: "fas fa-code", color: "text-orange-500" },

  { name: "Data Science", icon: "fas fa-microscope", color: "text-indigo-600" },
];

function SkillBar({ skill, index }: { skill: typeof technicalSkills[0]; index: number }) {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedWidth(skill.percentage);
      }, index * 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.percentage, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
        <span className="text-primary font-semibold">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${animatedWidth}%` }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full"
        />
      </div>
    </motion.div>
  );
}

function TechIcon({ tech, index }: { tech: typeof technologies[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.15, 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 cursor-pointer group"
    >
      <motion.i 
        className={`${tech.icon} text-4xl ${tech.color} mb-2 transition-all duration-300`}
        whileHover={{
          scale: 1.2,
          filter: "brightness(1.3) saturate(1.4)",
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{tech.name}</span>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning data science, AI/ML, web development, and analytics to transform data into actionable insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Technical Skills</h3>
            <div>
              {technicalSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Technologies & Tools */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Technologies & Tools</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <TechIcon key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add Font Awesome for icons */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        rel="stylesheet"
      />
    </section>
  );
}
