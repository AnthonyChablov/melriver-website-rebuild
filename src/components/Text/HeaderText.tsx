import React from "react";
import { cn } from "@/lib/utils";

interface HeaderTextProps {
  mode?: "h1" | "h2" | "h3" | "h4";
  text: string;
  className?: string;
  children?: React.ReactNode;
}

const HeaderText = ({
  mode = "h1",
  text = "",
  children,
  className,
}: HeaderTextProps) => {
  let modeClass = "";
  let HeadingTag: React.ElementType = "h1";

  switch (mode) {
    case "h1":
      modeClass = "text-2xl";
      HeadingTag = "h1";
      break;
    case "h2":
      modeClass = "text-xl";
      HeadingTag = "h2";
      break;
    case "h3":
      modeClass = "text-lg";
      HeadingTag = "h3";
      break;
    case "h4":
      modeClass = "text-base";
      HeadingTag = "h4";
      break;
    default: // Default to h1 size if mode is not recognized
      modeClass = "text-3xl";
      HeadingTag = "h1";
  }

  return (
    <HeadingTag className={cn(`${modeClass} ${className}`)}>
      {text} {children}
    </HeadingTag>
  );
};

export default HeaderText;
