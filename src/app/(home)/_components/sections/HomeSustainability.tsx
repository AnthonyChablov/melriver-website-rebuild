import React from "react";
import Spacer from "@/components/Spacer";
import ContentCard from "@/components/Card/ContentCard";
import Info from "../Info";
import RenderData from "../../../../components/Render/RenderData";
import { sustainabilityData } from "@/app/(home)/_data/data";

const SustainabilitySection: React.FC = () => {
  return (
    <ContentCard
      title={"Sustainability"}
      description="A balance between social, environmental and financial interests."
    >
      <Spacer spaceingAmount={4} />
      <div className="flex flex-col xs:grid xs:grid-cols-2 gap-x-5 gap-y-4 ">
        <RenderData data={sustainabilityData}>
          {(item, index) => (
            <Info
              key={item.id}
              title={item.stat}
              description={item.description}
              className={
                index === sustainabilityData.length - 1 ? "col-span-2" : ""
              }
            />
          )}
        </RenderData>
      </div>
    </ContentCard>
  );
};

export default SustainabilitySection;
