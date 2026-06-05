import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface InteractiveProfileProps {
  imageUrl?: string;
  size?: number;
  className?: string;
}

export default function InteractiveProfile({ 
  imageUrl, 
  size = 300, 
  className = "" 
}: InteractiveProfileProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate mouse position relative to center (-1 to 1)
      const mouseX = (e.clientX - centerX) / (rect.width / 2);
      const mouseY = (e.clientY - centerY) / (rect.height / 2);
      
      // Apply rotation limits and sensitivity
      const maxRotation = 15;
      const newRotateY = mouseX * maxRotation; // Left-right tilt
      const newRotateX = -mouseY * maxRotation; // Up-down tilt (negative for correct direction)
      
      setRotateY(newRotateY);
      setRotateX(newRotateX);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      container.addEventListener("mousemove", handleMouseMove);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      container.removeEventListener("mousemove", handleMouseMove);
      // Reset rotation when mouse leaves
      setRotateX(0);
      setRotateY(0);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative mx-auto ${className}`}
      style={{ 
        width: size, 
        height: size,
        perspective: '1000px', // CSS perspective for 3D effect
      }}
    >
      <motion.div
        className="w-full h-full cursor-pointer"
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.5,
        }}
        whileHover={{ scale: 1.05 }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="w-full h-full rounded-full overflow-hidden backdrop-blur-md border-4 border-white/30 shadow-2xl"
          style={imageUrl ? {
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          } : {
            background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))'
          }}
        >
          {/* Fallback icon if no image provided */}
          {!imageUrl && (
            <div className="w-full h-full flex items-center justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
        
        {/* Dynamic glow effect based on hover state */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-sm -z-10"
          animate={{
            scale: isHovered ? 1.1 : 1,
            opacity: isHovered ? 0.8 : 0.4,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
          }}
        />
      </motion.div>
    </div>
  );
}