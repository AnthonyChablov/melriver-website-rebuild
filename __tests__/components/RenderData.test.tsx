import { render, screen } from "@testing-library/react";
import RenderData from "@/components/RenderData";
import ProjectCard from "@/components/Card/ProjectCard";
import { agencyProjectData } from "@/app/(agency)/agency/_data/data";

describe("RenderData", () => {
  it("should render the component in the DOM", () => {
    render(
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
    );

    agencyProjectData.forEach((project) => {
      const header = screen.getByText(project.headerText);
      const paragraph = screen.getByText(project.paragraphText);
      expect(header).toBeInTheDocument();
      expect(paragraph).toBeInTheDocument();
    });
  });

  it("should render images with correct alt text", () => {
    render(
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
    );

    agencyProjectData.forEach((project) => {
      const image = screen.getByAltText(project.headerText);
      expect(image).toBeInTheDocument();
    });
  });

  it("should render paragraph text", () => {
    render(
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
    );

    agencyProjectData.forEach((project) => {
      const paragraph = screen.getByText(project.paragraphText);
      expect(paragraph).toBeInTheDocument();
    });
  });
});
