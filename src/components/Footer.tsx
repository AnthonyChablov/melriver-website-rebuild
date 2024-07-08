import React from "react";
import ParagraphText from "./Text/ParagraphText";
import Container from "./Container";
import Spacer from "./Spacer";

const Footer = () => {
  return (
    <footer className="">
      <Spacer spaceingAmount="6" />
      <Container className="text-left">
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
      <Spacer spaceingAmount="6" />
    </footer>
  );
};

export default Footer;
