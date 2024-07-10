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
      tl.to(firstLayerRef.current, {
        y: "100%",
        duration: 0.5,
        ease: "power2.inOut",
        display: "none",
      })
        .to(secondLayerRef.current, {
          y: "100%",
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(
          introRef.current,
          {
            height: 0,
            duration: 0.75,
            opacity: 0,
            y: "-100%",
            ease: "power2.inOut",
          },
          "+=.5"
        )
        .to(
          mainLayerRef.current,
          {
            height: 0,
            duration: 0.75,
            background: "white",
            opacity: 0,
            y: "-100%",
            ease: "power2.inOut",
          },
          "<"
        );
    },
    { scope: introRef }
  );

  return (
    <div ref={introRef} className="relative">
      <div
        ref={firstLayerRef}
        className="h-screen w-full bg-black absolute top-0 left-0 z-20"
      ></div>
      <div
        ref={secondLayerRef}
        className="h-screen w-full bg-white absolute top-0 left-0 z-10"
      ></div>
      <div
        ref={mainLayerRef}
        className="h-screen w-full flex bg-black justify-center 
          items-center  top-0 left-0 z-0 "
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
