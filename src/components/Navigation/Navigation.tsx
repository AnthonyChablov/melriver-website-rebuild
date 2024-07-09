import React from "react";
import Link from "next/link";
import ParagraphText from "../Text/ParagraphText";
import { Button } from "@/components/ui/button";
import NavigationLinks from "./NavigationLinks";
import Container from "../Container";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  return (
    <nav className={cn(`py-8 lg:py-0 lg:top-0 ${className}`)}>
      <Container className="flex justify-between items-center lg:w-full lg:p-0">
        <Link href={"/"}>
          <ParagraphText text="Melriver" mode="2xl" className="font-medium" />
        </Link>
        {/* Multi Button */}
        <NavigationLinks className="lg:hidden" />
      </Container>
    </nav>
  );
};

export default Navigation;
