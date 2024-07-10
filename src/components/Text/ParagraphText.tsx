import React from "react";
import { cn } from "@/lib/utils";

interface ParagraphTextProps {
  mode?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

const ParagraphText = React.forwardRef<
  HTMLParagraphElement,
  ParagraphTextProps
>(({ mode = "md", text, children, className }, ref) => {
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
    case "4xl":
      modeClass = "text-4xl";
      break;
    case "5xl":
      modeClass = "text-5xl";
      break;
    case "6xl":
      modeClass = "text-6xl";
      break;
    case "7xl":
      modeClass = "text-7xl";
      break;
    case "8xl":
      modeClass = "text-8xl";
      break;
    case "9xl":
      modeClass = "text-9xl";
      break;
    default:
      modeClass = "text-base"; // Default to medium size if mode is not recognized
  }

  return (
    <p ref={ref} className={cn(`${modeClass} ${className}`)}>
      {text} {children}
    </p>
  );
});

ParagraphText.displayName = "ParagraphText";
export default ParagraphText;
