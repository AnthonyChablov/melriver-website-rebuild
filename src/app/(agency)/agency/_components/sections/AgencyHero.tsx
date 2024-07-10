import React from "react";
import Spacer from "@/components/Spacer";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation/Navigation";

const HeroSection: React.FC = () => {
  return (
    <section
      className="  md:w-6/12 lg:w-full md:sticky md:py-8 md:top-0
            text-center md:text-left flex flex-col md:h-screen justify-between"
    >
      <Navigation className="hidden md:block" />
      <div className="">
        <Spacer spaceingAmount={2} />
        <HeaderText
          text="Tailor-made Shopify stores."
          mode="h1"
          className="text-5xl xs:text-6xl font-medium lg:text-7xl w-full  mx-auto"
        />
        <Spacer spaceingAmount={4} />
        <ParagraphText
          className="font-medium"
          text="We build state-of-the-art fashion, lifestyle, luxury eCommerce stores on Shopify & Shopify Plus by bridging the gap between branding and conversion."
        />
      </div>
      <Footer className="hidden md:block" />
    </section>
  );
};

export default HeroSection;
