import React from "react";

interface RenderDataProps {
  data: any[];
  children: (item: any, index: number) => React.ReactNode;
}

const RenderData: React.FC<RenderDataProps> = ({ data, children }) => {
  return (
    <>
      {data.map((item, index) => (
        <React.Fragment key={index}>{children(item, index)}</React.Fragment>
      ))}
    </>
  );
};

export default RenderData;
