import React from "react";
import NavigationLinks from "@/components/Navigation/NavigationLinks";
import Spacer from "@/components/Spacer";
import { agencyProjectData } from "../../_data/data";
import RenderData from "@/components/RenderData";
import ProjectCard from "@/components/Card/ProjectCard";

const ProjectSection = () => {
  return (
    <section className=" md:w-6/12 lg:w-full ">
      <div className="w-full flex justify-end">
        <NavigationLinks className="w-fit py-8 hidden md:block" />
      </div>
      <Spacer spaceingAmount={8} className="md:hidden" />
      <div className=" flex flex-col space-y-9 ">
        <RenderData data={agencyProjectData}>
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
      </div>
      <Spacer spaceingAmount={4} />
    </section>
  );
};

export default ProjectSection;
