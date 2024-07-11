import React from "react";
import Spacer from "@/components/Spacer";
import ProjectCard from "@/components/Card/ProjectCard";
import { studioProjectData } from "@/app/(home)/_data/data";
import RenderData from "../../../../components/RenderData";

const ProjectSection: React.FC = () => {
  return (
    <section className=" lg:w-full pb-14">
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
