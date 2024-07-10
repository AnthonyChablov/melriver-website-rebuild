import React from "react";
import Spacer from "@/components/Spacer";
import Container from "@/components/Container";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import ProjectCard from "@/components/Card/ProjectCard";
import { agencyProjectData } from "./_lib/data";
import NavigationLinks from "@/components/Navigation/NavigationLinks";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro/Intro";
import { Metadata } from "next";

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
          <section className=" md:w-6/12 lg:w-full pb-14">
            <div className="w-full flex justify-end">
              <NavigationLinks className="w-fit py-8 hidden md:block" />
            </div>
            <Spacer spaceingAmount={8} className="md:hidden" />
            <div className=" flex flex-col space-y-9 ">
              {agencyProjectData.map((project, index) => (
                <ProjectCard
                  key={index}
                  imageUrl={project.imageUrl}
                  linkUrl={project.linkUrl}
                  headerText={project.headerText}
                  paragraphText={project.paragraphText}
                />
              ))}
            </div>
          </section>
        </Container>
      </main>
      <Footer className="md:hidden " />
    </>
  );
};

export default page;
