import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import Spacer from "@/components/Spacer";
import ProjectCard from "@/components/Card/ProjectCard";
import { studioProjectData } from "./_lib/data";
import ContentCard from "@/components/Card/ContentCard";
import Container from "@/components/Container";
import Info from "./_components/Info";
import { sustainabilityData } from "./_lib/data";
import RenderCarousel from "./_components/RenderCarousel";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <Container className="md:flex md:justify-between md:space-x-10">
        <section className="md:w-6/12 lg:w-6/12   text-center md:text-left h-full ">
          <Spacer spaceingAmount={2} />
          <HeaderText
            text="We build outstanding brands."
            className="text-5xl font-medium md:text-7xl xl:text-8xl "
          />
          <Spacer spaceingAmount={4} />
          <ParagraphText
            className="font-medium"
            text="We craft outstanding direct-to-consumer brands with the common ambition to offer true craftsmanship, timeless products that are carbon neutral – and this without ever making any concessions."
          />
        </section>
        <div className=" md:w-5/12  ">
          <Spacer spaceingAmount={8} className="md:hidden" />
          <section className="">
            {studioProjectData.map((project, index) => (
              <ProjectCard
                key={index}
                imageUrl={project.imageUrl}
                linkUrl={project.linkUrl}
                headerText={project.headerText}
                paragraphText={project.paragraphText}
              />
            ))}
          </section>
          <Spacer spaceingAmount={6} />
          <section className="">
            <ContentCard title={"Featured In"}>
              <RenderCarousel />
            </ContentCard>
          </section>
          <Spacer spaceingAmount={6} />
          <section className="">
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
        </div>
      </Container>
    </main>
  );
}
