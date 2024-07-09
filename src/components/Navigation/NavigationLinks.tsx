"use client";
import React from "react";
import Link from "next/link";
import ParagraphText from "../Text/ParagraphText";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavigationLinksProps {
  className?: string;
}

const NavigationLinks = ({ className = "" }: NavigationLinksProps) => {
  const pathname = usePathname();

  return (
    <div className={cn(`flex items-center justify-center ${className}`)}>
      <div className="bg-zinc-200 rounded-full p-1 space-x-1 ">
        <Button
          className={cn("rounded-3xl py-1 px-2 h-fit", {
            "bg-transparent hover:bg-zinc-300 text-black": pathname !== "/", // Apply bg-transparent if pathname is not '/studio'
          })}
          asChild
        >
          <Link href="/">
            <ParagraphText text="Studio" mode="sm" className="font-medium" />
          </Link>
        </Button>
        <Button
          className={cn("rounded-3xl py-1 px-2 h-fit", {
            "bg-transparent hover:bg-zinc-300 text-black":
              pathname !== "/agency", // Apply bg-transparent if pathname is not '/agency'
          })}
          asChild
        >
          <Link href="/agency">
            <ParagraphText text="Agency" mode="sm" className="font-medium" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NavigationLinks;
