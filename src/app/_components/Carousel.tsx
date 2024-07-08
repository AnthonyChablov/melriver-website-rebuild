"use client";
import React, { useRef, useEffect } from "react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Define props for the Carousel component
interface CarouselProps {
  children: React.ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  const carousel = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1, paused: true });
      const wrap = gsap.utils.wrap(-100, 200);

      tl.fromTo(
        carousel.current,
        {
          ease: "none",
          x: "120%",
          visibility: `hidden`,
        },
        {
          duration: 14,
          visibility: `visible`,
          ease: "none",
          x: "-=300%", //move each box 500% to right
          modifiers: {
            y: gsap.utils.unitize(wrap), //force y value to wrap when it reaches -100
          },
        }
      );

      tl.play(); // Start the timeline to make it infinite

      return () => {
        tl.kill(); // Cleanup: kill the animation on unmount
      };
    },
    { scope: carousel }
  );

  return (
    <div ref={carousel} className="space-x-12 invisible flex ">
      {children}
    </div>
  );
};

export default Carousel;
