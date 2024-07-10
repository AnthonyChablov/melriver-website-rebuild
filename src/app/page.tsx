import React from "react";
import Container from "@/components/Container";
import Intro from "@/components/Intro/Intro";
import Navigation from "@/components/Navigation/Navigation";
import NavigationLinks from "@/components/Navigation/NavigationLinks";
import Footer from "@/components/Footer";
import HeroSection from "./_components/Sections/HeroSection";
import ProjectSection from "./_components/Sections/ProjectSection";
import SustainabilitySection from "./_components/Sections/SustainabilitySection";
import FeaturedSection from "./_components/Sections/FeaturedSection";
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
          <div className="md:w-6/12 lg:w-full pb-14">
            <div className="w-full flex justify-end">
              <NavigationLinks className="w-fit py-8 hidden md:block" />
            </div>
            <ProjectSection />
            <FeaturedSection />
            <SustainabilitySection />
          </div>
        </Container>
      </main>
      <Footer className="md:hidden" />
    </>
  );
};

export default Home;
