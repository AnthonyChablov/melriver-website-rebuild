import React from "react";
import Container from "@/components/Container";
import HeroSection from "./_components/sections/AgencyHero";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import { Metadata } from "next";
import ProjectSection from "./_components/sections/AgencyProject";

export const metadata: Metadata = {
  title: "Melriver Agency – Tailor-made Shopify stores",
  description:
    "We build state-of-the-art fashion, lifestyle, luxury eCommerce stores on Shopify & Shopify Plus by bridging the gap between branding and conversion.",
};

const page = () => {
  return (
    <>
      <Intro />
      <Navigation className="md:hidden" />
      <main className="flex flex-col items-center justify-center ">
        <Container
          className="md:flex sm:justify-between lg:justify-end 
            md:space-x-10 md:relative md:w-full"
        >
          <HeroSection />
          <ProjectSection />
        </Container>
      </main>
      <Footer className="md:hidden " />
    </>
  );
};

export default page;
