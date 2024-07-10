import React from "react";
import ParagraphText from "@/components/Text/ParagraphText";
import Spacer from "@/components/Spacer";
import { cn } from "@/lib/utils";

interface InfoProps {
  title?: string;
  description?: string;
  className?: string;
}

const Info = ({ title = "", description = "", className = "" }: InfoProps) => {
  return (
    <div className={cn(`w-full ${className}`)}>
      <div className="text-left">
        <div className=" border-t-[1px] border-zinc-300"></div>
        <Spacer spaceingAmount={3} />
        {/* Title */}
        <ParagraphText
          text={title}
          mode="4xl"
          className="font-semibold tracking-tighter"
        />
        <Spacer spaceingAmount={1} />
        {/* Description */}
        <ParagraphText
          text={description}
          mode="sm"
          className="font-medium text-zinc-500 "
        />
      </div>
    </div>
  );
};

export default Info;
