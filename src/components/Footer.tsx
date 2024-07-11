import React from "react";
import ParagraphText from "./Text/ParagraphText";
import Container from "./Container";
import Spacer from "./Spacer";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn(`${className} w-full `)}>
      <Spacer spaceingAmount={6} />
      <Container className="text-left lg:p-0">
        <ParagraphText
          className="font-bold"
          mode="sm"
          text="© Melriver, All rights reserved"
        />
        <ParagraphText
          className=" text-zinc-500 font-medium"
          mode="sm"
          text="‍No cookie Policy. No privacy policy."
        />
      </Container>
    </footer>
  );
};

export default Footer;
