import { type FC } from "react";

export type CharacterCardProps = {
  name: string;
  description: string;
  imageSrc: string;
  onClick?: () => void;
};




const CharacterCard: FC<CharacterCardProps> = ({
  name,
  description,
  imageSrc,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Select ${name}`}
      className="
        group relative overflow-hidden rounded-2xl
        bg-background/40 ring-1 ring-border/60
        shadow-[0_10px_30px_var(--shadow-md,rgba(0,0,0,0.35))]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-ring
        text-left
      "
      style={{ width: "270px", height: "60vh" }}
    >
      {/* Image */}
      <div className="aspect-[4/5] w-full h-full overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Persistent name badge (always visible) */}
      <div className="absolute inset-x-0 bottom-0 p-3 z-10">
        <div
          className="
            inline-block rounded-lg bg-black/40 px-2.5 py-1.5
            text-white text-sm font-semibold ring-1 ring-white/20 backdrop-blur
          "
        >
          {name}
        </div>
      </div>

      {/* Hover panel: slides up + fades in from bottom */}
      <div
        className="
          absolute inset-x-0 bottom-0 z-0 h-full
          opacity-0 pointer-events-none
          transition-opacity duration-300 ease-out
          group-hover:opacity-100
          bg-gradient-to-t from-black/80 via-black/50 to-transparent
          backdrop-blur-sm
          px-3 pb-3 pt-16
        "
      >
        <p className="text-[12px] leading-snug text-white/90">
          {description}
        </p>
      </div>

    </button>
  );
};

export default CharacterCard;
