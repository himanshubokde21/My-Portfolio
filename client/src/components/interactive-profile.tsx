import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface InteractiveProfileProps {
  imageUrl?: string;
  size?: number;
  className?: string;
}

export default function InteractiveProfile({ 
  imageUrl, 
  size = 128, 
  className = "" 
}: InteractiveProfileProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [elementPosition, setElementPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const updateElementPosition = (element: HTMLElement | null) => {
    if (element) {
      const updatePosition = () => {
        const rect = element.getBoundingClientRect();
        setElementPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      };
      
      updatePosition();
      
      // Update position on scroll and resize
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
      
      return () => {
        window.removeEventListener('scroll', updatePosition);
        window.removeEventListener('resize', updatePosition);
      };
    }
  };

  // Calculate 3D perspective rotation to "look" at mouse
  const calculateLookDirection = () => {
    const deltaX = mousePosition.x - elementPosition.x;
    const deltaY = mousePosition.y - elementPosition.y;
    
    // Calculate distance for intensity effects
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 400; // Maximum effective distance
    const normalizedDistance = Math.min(distance / maxDistance, 1);
    const intensity = Math.max(0.2, 1 - normalizedDistance * 0.8);
    
    // Calculate 3D rotation angles for perspective effect
    const maxRotation = 25; // Maximum rotation in degrees
    
    // Normalize mouse position relative to element (-1 to 1)
    const normalizedX = deltaX / maxDistance;
    const normalizedY = deltaY / maxDistance;
    
    // Calculate rotations for 3D perspective effect
    const rotateY = normalizedX * maxRotation * intensity; // Horizontal look
    const rotateX = -normalizedY * maxRotation * intensity; // Vertical look (negative for correct direction)
    
    return { 
      rotateX: Math.max(-maxRotation, Math.min(maxRotation, rotateX)),
      rotateY: Math.max(-maxRotation, Math.min(maxRotation, rotateY)),
      intensity 
    };
  };

  const { rotateX, rotateY, intensity } = calculateLookDirection();

  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        width: size, 
        height: size,
        perspective: '1000px', // Add CSS perspective for 3D effect
      }}
    >
      <motion.div
        ref={updateElementPosition}
        className="w-full h-full"
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
        }}
        whileHover={{ scale: 1.05 }}
        style={{
          transformStyle: 'preserve-3d', // Preserve 3D transforms
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
      
      {/* Dynamic glow effect based on mouse interaction */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-sm -z-10"
        animate={{
          scale: 1 + intensity * 0.1,
          opacity: 0.6 + intensity * 0.4,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      />
      </motion.div>
    </div>
  );
}