"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ParagraphText from "../Text/ParagraphText";

const Intro = () => {
  const introRef = useRef(null);
  const firstLayerRef = useRef(null);
  const secondLayerRef = useRef(null);
  const mainLayerRef = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(
    () => {
      let tl = gsap.timeline({});
      tl.fromTo(
        firstLayerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      )
        .to(secondLayerRef.current, { y: "100%", duration: 1 }, "+=0.5")
        .to(mainLayerRef.current, { y: "100%", duration: 1 }, "+=0.5")
        .to(
          [firstLayerRef.current, secondLayerRef.current, mainLayerRef.current],
          { opacity: 0, duration: 1 },
          "+=0.5"
        );
    },
    { scope: introRef }
  );

  return (
    <div ref={introRef} className="relative">
      <div
        ref={firstLayerRef}
        className="h-screen w-full bg-black absolute top-0 left-0 z-0"
      ></div>
      <div
        ref={secondLayerRef}
        className="h-screen w-full bg-white absolute top-0 left-0 z-10"
      ></div>
      <div
        ref={mainLayerRef}
        className="h-screen w-full flex bg-black justify-center 
          items-center absolute top-0 left-0 z-20"
      >
        <ParagraphText
          ref={paragraphRef}
          text="Melriver"
          mode="7xl"
          className="font-medium text-white"
        />
      </div>
    </div>
  );
};

export default Intro;
