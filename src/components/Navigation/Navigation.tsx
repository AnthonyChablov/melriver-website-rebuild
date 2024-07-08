import React from "react";
import Link from "next/link";
import ParagraphText from "../Text/ParagraphText";
import { Button } from "@/components/ui/button";
import NavigationLinks from "./NavigationLinks";
import Container from "../Container";

const Navigation = () => {
  return (
    <nav className="py-8 ">
      <Container className="flex justify-between items-center">
        <Link href={"/"}>
          <ParagraphText text="Melriver" mode="2xl" className="font-medium" />
        </Link>
        <div className="flex items-center justify-center">
          {/* Multi Button */}
          <NavigationLinks />
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
