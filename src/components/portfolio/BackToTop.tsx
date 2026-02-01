import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled 30% down the page
      const scrolled = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      setIsVisible(scrolled > pageHeight * 0.3);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-40 h-10 w-10 rounded-full",
        "border-border bg-background/80 backdrop-blur-sm",
        "btn-hover",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
      style={{
        transitionDuration: "var(--duration-interactive)",
        transitionTimingFunction: "var(--ease-entrance)"
      }}
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  );
};

export default BackToTop;
