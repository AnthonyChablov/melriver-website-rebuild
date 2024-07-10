import React from "react";
import Spacer from "@/components/Spacer";
import ProjectCard from "@/components/Card/ProjectCard";
import { studioProjectData } from "@/app/_lib/data";
import RenderData from "../RenderData";

const ProjectSection: React.FC = () => {
  return (
    <section className="md:w-6/12 lg:w-full pb-14">
      <Spacer spaceingAmount={8} className="md:hidden" />
      <RenderData data={studioProjectData}>
        {(project, index) => (
          <ProjectCard
            key={index}
            imageUrl={project.imageUrl}
            linkUrl={project.linkUrl}
            headerText={project.headerText}
            paragraphText={project.paragraphText}
          />
        )}
      </RenderData>
    </section>
  );
};

export default ProjectSection;
