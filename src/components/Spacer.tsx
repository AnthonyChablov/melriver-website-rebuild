import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SpacerProps {
  className?: string;
  children?: ReactNode;
  spaceingAmount?: number;
}

const Spacer = ({ spaceingAmount = 4, className, children }: SpacerProps) => {
  const spacingClasses: { [key: number]: string } = {
    0: "py-0",
    1: "py-1",
    2: "py-2",
    3: "py-3",
    4: "py-4",
    5: "py-5",
    6: "py-6",
    7: "py-7",
    8: "py-8",
    9: "py-9",
    10: "py-10",
  };
  const spacingClass = spacingClasses[spaceingAmount] || "py-4";
  return (
    <div role="spacer" className={cn(spacingClass, className)}>
      {" "}
      {children}
    </div>
  );
};

export default Spacer;
