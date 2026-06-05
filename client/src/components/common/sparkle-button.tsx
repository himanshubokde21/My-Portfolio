import { ReactNode, MouseEvent } from "react";

interface SparkleButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "success" | "purple" | "orange" | "blue" | "plain";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const gradientVariants = {
  primary: "linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3)",
  secondary: "linear-gradient(45deg, #667eea, #764ba2, #667eea)",
  success: "linear-gradient(45deg, #56ab2f, #a8e6cf, #4ecdc4)",
  purple: "linear-gradient(45deg, #8360c3, #2ebf91, #8360c3)",
  orange: "linear-gradient(45deg, #ff9a9e, #fecfef, #fecfef)",
  blue: "linear-gradient(45deg, #a8edea, #fed6e3, #a8edea)",
  plain: ""
};

export default function SparkleButton({ 
  children, 
  className = "", 
  variant = "primary",
  onClick,
  type = "button",
  disabled = false
}: SparkleButtonProps) {
  
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick();
    
    // Add click animation to sparkles
    const button = e.currentTarget;
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 1200);
  };

  const isPlain = variant === "plain";
  const gradientStyle = isPlain ? {} : { background: gradientVariants[variant] };

  return (
    <div className="button-wrapper relative overflow-visible">
      <button
        type={type}
        disabled={disabled}
        onClick={handleClick}
        className={`sparkle-button ${isPlain ? 'plain-button' : ''} ${className}`}
        style={gradientStyle}
      >
        <span className="button-text">
          {children}
        </span>
        
        {!isPlain && (
          <>
            <div className="sparkle sparkle-1"></div>
            <div className="sparkle sparkle-2"></div>
            <div className="sparkle sparkle-3"></div>
            <div className="sparkle sparkle-4"></div>
            <div className="sparkle sparkle-5"></div>
            <div className="sparkle sparkle-6"></div>
            <div className="sparkle sparkle-7"></div>
            <div className="sparkle sparkle-8"></div>
          </>
        )}
      </button>
    </div>
  );
}
