import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface SparkleButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function SparkleButton({ 
  children, 
  className = "", 
  variant = "default",
  size = "default",
  onClick,
  type = "button",
  disabled = false
}: SparkleButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <Button
        type={type}
        variant={variant}
        size={size}
        disabled={disabled}
        onClick={onClick}
        className={`sparkle-btn relative overflow-hidden ${className}`}
      >
        {children}
      </Button>
    </motion.div>
  );
}
