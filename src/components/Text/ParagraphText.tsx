import React from "react";
import { cn } from "@/lib/utils";

interface ParagraphTextProps {
  mode?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

const ParagraphText = ({
  mode = "md",
  text,
  children,
  className,
}: ParagraphTextProps) => {
  let modeClass = "";

  switch (mode) {
    case "sm":
      modeClass = "text-sm";
      break;
    case "md":
      modeClass = "text-base";
      break;
    case "lg":
      modeClass = "text-lg";
      break;
    case "xl":
      modeClass = "text-xl";
      break;
    case "2xl":
      modeClass = "text-2xl";
      break;
    case "3xl":
      modeClass = "text-3xl";
      break;
    default:
      modeClass = "text-base"; // Default to medium size if mode is not recognized
  }

  return (
    <p className={cn(`${modeClass} ${className}`)}>
      {text} {children}
    </p>
  );
};

export default ParagraphText;
