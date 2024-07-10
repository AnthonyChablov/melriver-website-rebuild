import React from "react";
import Spacer from "@/components/Spacer";
import ContentCard from "@/components/Card/ContentCard";
import RenderCarousel from "../RenderCarousel";

const FeaturedSection: React.FC = () => {
  return (
    <section>
      <ContentCard title={"Featured In"}>
        <RenderCarousel />
        <Spacer spaceingAmount={6} />
      </ContentCard>
    </section>
  );
};

export default FeaturedSection;
