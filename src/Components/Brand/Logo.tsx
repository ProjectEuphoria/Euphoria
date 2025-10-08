import { type FC } from "react";
import LogoSvg from "../../assets/logo.svg"; // this resolves to the file URL

type LogoSize = "sm" | "md" | "lg";

const Logo: FC<{ size?: LogoSize }> = ({ size = "md" }) => {
  const sizes: Record<LogoSize, string> = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  return (
      <img
        src={LogoSvg}
        alt="Empario"
        style={{height:"100%", width:"100%"}}
        className={`rounded-full ring-border/60 object-cover ${sizes[size]}`}
      />
  );
};

export default Logo;
