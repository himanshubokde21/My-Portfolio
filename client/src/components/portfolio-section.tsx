import { motion } from "framer-motion";
import { ShoppingCart, CheckSquare, BarChart3, ExternalLink, Github } from "lucide-react";
import SparkleButton from "./sparkle-button";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
    icon: ShoppingCart,
    gradient: "from-blue-400 to-purple-600",
    technologies: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and team features.",
    icon: CheckSquare,
    gradient: "from-green-400 to-blue-500",
    technologies: ["Vue.js", "Firebase", "Tailwind"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "A comprehensive analytics dashboard with interactive charts and real-time data.",
    icon: BarChart3,
    gradient: "from-purple-400 to-pink-500",
    technologies: ["React", "D3.js", "Python"],
    demoUrl: "#",
    codeUrl: "#",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
    >
      <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        <motion.div
          initial={{ opacity: 0.2 }}
          whileHover={{ opacity: 0.4 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <Icon size={32} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.demoUrl}
            className="text-primary hover:text-secondary transition-colors duration-300 flex items-center gap-1"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.codeUrl}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 flex items-center gap-1"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">My Portfolio</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of projects that showcase my skills in web development, UI/UX design, and problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <SparkleButton className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90">
            View All Projects
          </SparkleButton>
        </motion.div>
      </div>
    </section>
  );
}
