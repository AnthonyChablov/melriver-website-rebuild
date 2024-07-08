import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SpacerProps {
  className?: string;
  children?: ReactNode;
  spaceingAmount?: string;
}

const Spacer = ({ spaceingAmount, className, children }: SpacerProps) => {
  const spacing = `py-${spaceingAmount}`;

  return (
    <div role="spacer" className={cn(`${spacing} ${className}`)}>
      {children}
    </div>
  );
};

export default Spacer;
