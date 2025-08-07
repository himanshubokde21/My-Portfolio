import { useState, useEffect } from "react";

interface TypingAnimationProps {
  roles: string[];
  baseText: string;
  className?: string;
}

export default function TypingAnimation({ roles, baseText, className = "" }: TypingAnimationProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        // Finished typing current role, start deleting after pause
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && currentText === "") {
        // Finished deleting, move to next role
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else if (!isDeleting) {
        // Continue typing
        setCurrentText(currentRole.substring(0, currentText.length + 1));
      } else {
        // Continue deleting
        setCurrentText(currentRole.substring(0, currentText.length - 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  return (
    <span className={className}>
      {baseText}{" "}
      <span className="text-black dark:text-white font-semibold">
        {currentText}
      </span>{" "}
      engineer
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
}