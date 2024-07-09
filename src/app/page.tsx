import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import Spacer from "@/components/Spacer";
import ProjectCard from "@/components/Card/ProjectCard";
import { studioProjectData } from "./_lib/data";
import ContentCard from "@/components/Card/ContentCard";
import Container from "@/components/Container";
import Info from "./_components/Info";
import { sustainabilityData } from "./_lib/data";
import NavigationLinks from "@/components/Navigation/NavigationLinks";
import RenderCarousel from "./_components/RenderCarousel";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation className="lg:hidden" />
      <main className="flex flex-col items-center justify-center ">
        <Container className="md:flex md:justify-between lg:justify-end md:space-x-10 lg:relative lg:w-full">
          <section
            className="md:w-6/12 lg:w-full lg:sticky lg:py-8 top-0
            text-center md:text-left flex flex-col lg:h-screen justify-between"
          >
            <Navigation className="hidden lg:block" />
            <div className="">
              <Spacer spaceingAmount={2} />
              <HeaderText
                text="We build outstanding brands."
                className="text-5xl font-medium md:text-7xl "
              />
              <Spacer spaceingAmount={4} />
              <ParagraphText
                className="font-medium"
                text="We craft outstanding direct-to-consumer brands with the common ambition to offer true craftsmanship, timeless products that are carbon neutral – and this without ever making any concessions."
              />
            </div>
            <Footer className="hidden lg:block" />
          </section>
          <section className=" md:w-5/12 lg:w-10/12 pb-14 ">
            <NavigationLinks className=" py-8 justify-end hidden lg:block" />
            <Spacer spaceingAmount={8} className="md:hidden" />
            {studioProjectData.map((project, index) => (
              <ProjectCard
                key={index}
                imageUrl={project.imageUrl}
                linkUrl={project.linkUrl}
                headerText={project.headerText}
                paragraphText={project.paragraphText}
              />
            ))}
            <Spacer spaceingAmount={6} />
            <ContentCard title={"Featured In"}>
              <RenderCarousel />
            </ContentCard>
            <Spacer spaceingAmount={6} />
            <ContentCard
              title={"Sustainability"}
              description="A balance between social, environmental and financial interests."
            >
              <Spacer spaceingAmount={4} />
              <div className="flex flex-col xs:grid xs:grid-cols-2 gap-x-5 gap-y-4 ">
                {sustainabilityData.map((item, index) => (
                  <Info
                    key={item.id}
                    title={item.stat}
                    description={item.description}
                    className={
                      index === sustainabilityData.length - 1
                        ? "col-span-2"
                        : ""
                    }
                  />
                ))}
              </div>
            </ContentCard>
          </section>
        </Container>
        <Footer className="lg:hidden" />
      </main>
    </>
  );
}
