import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const SectionDivider = () => {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.5 });

  return (
    <div ref={ref} className="px-6 md:px-12 lg:px-24 py-2">
      <div className="max-w-4xl">
        <div 
          className={cn(
            "section-divider mx-auto",
            isVisible && "active"
          )}
        />
      </div>
    </div>
  );
};

export default SectionDivider;
