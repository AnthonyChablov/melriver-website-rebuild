import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import Spacer from "@/components/Spacer";
import ProjectCard from "@/components/Card/ProjectCard";
import hillsMadeProjectImg from "./../../public/hills-made-project.png";
import ContentCard from "@/components/Card/ContentCard";
import Container from "@/components/Container";
import Carousel from "./_components/Carousel";

const projectData = [
  {
    imageUrl: hillsMadeProjectImg,
    linkUrl: "https://hillsmade.com/?ref=melriver",
    headerText: "Hills",
    paragraphText: "hillsmade.com",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center">
      <Container>
        <section className="">
          <Spacer spaceingAmount="2" />
          <HeaderText
            text="We build outstanding brands."
            className="text-5xl font-medium"
          />
          <Spacer />
          <ParagraphText
            className="font-medium"
            text="We craft outstanding direct-to-consumer brands with the common ambition to offer true craftsmanship, timeless products that are carbon neutral – and this without ever making any concessions."
          />
        </section>
        <Spacer spaceingAmount="6" />
        <section className="">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              imageUrl={project.imageUrl}
              linkUrl={project.linkUrl}
              headerText={project.headerText}
              paragraphText={project.paragraphText}
            />
          ))}
        </section>
        <Spacer spaceingAmount="6" />
        <section className="">
          <ContentCard title={"Featured In"}>
            {/*           <Carousel />
             */}
          </ContentCard>
        </section>
        <Spacer spaceingAmount="6" />
        <section className="">
          <ContentCard
            title={"Sustainability"}
            description="A balance between social, environmental and financial interests."
          >
            123
          </ContentCard>
        </section>
      </Container>
    </main>
  );
}
