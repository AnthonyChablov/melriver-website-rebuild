"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ParagraphText from "../Text/ParagraphText";

const Intro = () => {
  const introRef = useRef(null);
  const firstLayerRef = useRef(null);
  const secondLayerRef = useRef(null);
  const mainLayerRef = useRef(null);
  const paragraphRef = useRef(null);

  return (
    <div ref={introRef} className="relative">
      <div
        ref={firstLayerRef}
        className="h-screen bg-black absolute top-0 left-0 "
      ></div>
      <div
        ref={secondLayerRef}
        className="h-screen bg-white absolute top-0 left-0"
      ></div>
      <div
        ref={mainLayerRef}
        className="h-screen flex bg-black justify-center place-items-center absolute top-0 left-0"
      >
        <ParagraphText
          ref={paragraphRef}
          text="Melriver"
          mode="4xl"
          className="font-medium"
        />
      </div>
    </div>
  );
};

export default Intro;
