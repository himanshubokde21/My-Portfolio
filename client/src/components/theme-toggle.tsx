import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
        className="w-10 h-10 p-0 rounded-full transition-all duration-300 hover:shadow-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 dark:bg-gray-800/50 dark:border-gray-700/50 dark:hover:bg-gray-700/50"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        <motion.div
          initial={false}
          animate={{ 
            rotate: theme === "dark" ? 0 : 180,
            scale: theme === "dark" ? 1 : 0.8 
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative w-5 h-5"
        >
          {theme === "dark" ? (
            <motion.div
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Moon className="h-5 w-5 text-yellow-300" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Sun className="h-5 w-5 text-yellow-500" />
            </motion.div>
          )}
        </motion.div>
      </Button>
    </motion.div>
  );
}