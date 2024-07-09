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

const page = () => {
  return (
    <>
      <Navigation className="lg:hidden" />
      <main className="flex flex-col items-center justify-center ">
        <Container className="md:flex md:justify-between lg:justify-end md:space-x-10 lg:relative lg:w-full">
          <section
            className="md:w-6/12 lg:w-full lg:sticky lg:py-8 lg:top-0
            text-center md:text-left flex flex-col h-screen justify-between"
          >
            <Navigation className="" />
            <div className="">
              <Spacer spaceingAmount={2} />
              <HeaderText
                text="Tailor-made Shopify stores."
                className="text-5xl font-medium md:text-7xl"
              />
              <Spacer spaceingAmount={4} />
              <ParagraphText
                className="font-medium"
                text="We build state-of-the-art fashion, lifestyle, luxury eCommerce stores on Shopify & Shopify Plus by bridging the gap between branding and conversion."
              />
            </div>
            <Footer className="" />
          </section>
          <section className=" md:w-5/12 lg:w-10/12 pb-14">
            <NavigationLinks className=" py-8 justify-end" />
            <Spacer spaceingAmount={8} className="md:hidden" />
            <div className=" flex flex-col space-y-9">
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
      <Footer className="lg:hidden " />
    </>
  );
};

export default page;
