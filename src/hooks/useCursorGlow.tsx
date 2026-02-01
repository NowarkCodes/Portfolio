import { useEffect, useRef } from "react";

export function useCursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number>();
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Create glow element
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);
    glowRef.current = glow;

    // Smooth interpolation for natural feel
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      if (!glowRef.current) return;

      // Smooth lag effect (0.08 = 80ms effective lag)
      currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, 0.08);
      currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, 0.08);

      glowRef.current.style.left = `${currentPos.current.x}px`;
      glowRef.current.style.top = `${currentPos.current.y}px`;

      rafRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;

      if (glowRef.current && !glowRef.current.classList.contains("active")) {
        glowRef.current.classList.add("active");
      }
    };

    const handleMouseLeave = () => {
      if (glowRef.current) {
        glowRef.current.classList.remove("active");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (glowRef.current) {
        glowRef.current.remove();
      }
    };
  }, []);
}
