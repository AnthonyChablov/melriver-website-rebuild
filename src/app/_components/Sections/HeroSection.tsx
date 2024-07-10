import React from "react";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import Spacer from "@/components/Spacer";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation/Navigation";

const HeroSection: React.FC = () => {
  return (
    <section
      className=" md:w-6/12 lg:w-full md:sticky md:py-8 md:top-0
            text-center md:text-left flex flex-col md:h-screen justify-between"
    >
      <Navigation className="hidden md:block" />
      <div>
        <Spacer spaceingAmount={2} />
        <HeaderText
          text="We build outstanding brands. "
          mode="h1"
          className="text-5xl sm:text-6xl font-medium lg:text-7xl w-full mx-auto"
        />
        <Spacer spaceingAmount={4} />
        <ParagraphText
          className="font-medium"
          text="We craft outstanding direct-to-consumer brands with the common ambition to offer true craftsmanship, timeless products that are carbon neutral – and this without ever making any concessions."
        />
      </div>
      <Footer className="hidden md:block" />
    </section>
  );
};

export default HeroSection;
