"use client"
import { useCallback, useEffect, useRef } from "react";

const Parallax = ({
  children,
  strength = 400,
  fromBottom = false,
  className,
} : {
  children: React.ReactNode;
  strength?: number;
  fromBottom?: boolean;
  className?: string;
}) => {
  const parallaxRef = useRef<any>(null);

  const updatePos = useCallback(() => {
    if (parallaxRef.current) {
      /**
       * Calc position of child
       */
      const { y, height } = parallaxRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const newPosition =
        ((windowHeight + height - (y + height)) / (windowHeight + height)) *
        height;
      const progressReal = Math.min(
        100,
        Math.max(0, (newPosition / height) * 100)
      );
      const newPos = fromBottom
        ? -((strength * progressReal) / 100)
        : (strength * progressReal) / 100 - strength;

      /**
       * Apply
       */
      parallaxRef.current.children[0].style.transform = `translateY(${newPos}px)`;
      parallaxRef.current.children[0].style.height = `calc(${strength}px + 100%)`;
    }
  }, [strength, fromBottom]);

  useEffect(() => {
    updatePos();
    window.addEventListener("scroll", updatePos);
    return () => {
      window.removeEventListener("scroll", updatePos);
    };
  }, [updatePos]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      ref={parallaxRef}
    >
      {children}
    </div>
  );
};

export default Parallax;