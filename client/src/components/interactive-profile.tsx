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

  // Calculate movement and rotation to "look" at mouse
  const calculateLookDirection = () => {
    const deltaX = mousePosition.x - elementPosition.x;
    const deltaY = mousePosition.y - elementPosition.y;
    
    // Calculate distance for intensity effects
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 300; // Maximum effective distance
    const normalizedDistance = Math.min(distance / maxDistance, 1);
    const intensity = Math.max(0.3, 1 - normalizedDistance * 0.7);
    
    // Calculate translation movement (how much the image moves within its container)
    const maxMovement = 15; // Maximum pixels to move
    const translateX = (deltaX / maxDistance) * maxMovement * intensity;
    const translateY = (deltaY / maxDistance) * maxMovement * intensity;
    
    // Add subtle rotation for more natural effect
    const maxRotation = 8;
    const rotateX = -(deltaY / maxDistance) * maxRotation * intensity;
    const rotateY = (deltaX / maxDistance) * maxRotation * intensity;
    
    return { 
      translateX: Math.max(-maxMovement, Math.min(maxMovement, translateX)),
      translateY: Math.max(-maxMovement, Math.min(maxMovement, translateY)),
      rotateX: Math.max(-maxRotation, Math.min(maxRotation, rotateX)),
      rotateY: Math.max(-maxRotation, Math.min(maxRotation, rotateY)),
      intensity 
    };
  };

  const { translateX, translateY, rotateX, rotateY, intensity } = calculateLookDirection();

  return (
    <motion.div
      ref={updateElementPosition}
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{
        x: translateX,
        y: translateY,
        rotateX,
        rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{ scale: 1.05 }}
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
  );
}