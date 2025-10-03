import { type FC, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

const SectionHeading: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative max-w-7xl mx-auto mb-6 flex w-full items-end ${className}`}>
      <h2
        className="
          relative text-center w-full sm:text-start sm:w-auto
          text-4xl sm:text-5xl md:text-6xl
          text-white tracking-tight
        "
      >
        {children}
       
      </h2>

      {/* subtle underline wave */}
      <div
        className="
          pointer-events-none absolute -bottom-2 h-[3px] w-[220px]
          rounded-full text-white
          opacity-70 blur-[1px]
        "
      />

      {/* arrow */}
      <ArrowRight size={50} className="ml-3 w-20 hidden text-white sm:inline-block" />
    </div>
  );
};

export default SectionHeading;
