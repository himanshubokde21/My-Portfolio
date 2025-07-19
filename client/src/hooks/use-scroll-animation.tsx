import { useEffect, useState } from "react";

export function useScrollAnimation() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px",
      }
    );

    return () => observer.disconnect();
  }, []);

  return { isInView };
}
