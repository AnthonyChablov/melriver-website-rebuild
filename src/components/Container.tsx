import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={cn(`container max-w-6xl  ${className}`)}>{children}</div>
  );
};

export default Container;
