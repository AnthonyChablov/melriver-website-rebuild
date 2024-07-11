import React from "react";
import Container from "@/components/Container";
import Intro from "@/components/Intro";
import Navigation from "@/components/Navigation/Navigation";
import NavigationLinks from "@/components/Navigation/NavigationLinks";
import Spacer from "@/components/Spacer";
import Footer from "@/components/Footer";
import HeroSection from "./_components/sections/HomeHero";
import ProjectSection from "./_components/sections/HomeProject";
import SustainabilitySection from "./_components/sections/HomeSustainability";
import FeaturedSection from "./_components/sections/HomeFeatured";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Melriver –  we create, manage and grow brands.",
  description:
    "Melriver crafts outstanding direct-to-consumer brands with the common ambition to offer true craftsmanship, timeless products that are carbon neutral – and this without ever making any concessions.",
};

const Home: React.FC = () => {
  return (
    <>
      <Intro />
      <Navigation className="md:hidden" />
      <main className="flex flex-col items-center justify-center">
        <Container className="md:flex sm:justify-between lg:justify-end md:space-x-10 md:relative md:w-full">
          <HeroSection />
          <div className="md:w-6/12 lg:w-full ">
            <div className="w-full flex justify-end">
              <NavigationLinks className="w-fit py-8 hidden md:block" />
            </div>
            <Spacer spaceingAmount={8} className="md:hidden" />
            <ProjectSection />
            <FeaturedSection />
            <Spacer spaceingAmount={8} className="" />
            <SustainabilitySection /> <Spacer spaceingAmount={4} />
          </div>
        </Container>
      </main>
      <Footer className="md:hidden" />
    </>
  );
};

export default Home;
