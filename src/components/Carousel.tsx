"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
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
      const wrapWidth = carousel.current?.scrollWidth || 0;
      const parentWidth = carousel.current?.parentElement?.offsetWidth || 0;

      tl.fromTo(
        carousel.current,
        {
          ease: "none",
          x: parentWidth,
          visibility: `visible`,
        },
        {
          duration: 20,
          x: -wrapWidth,
          ease: "none",
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
    <div
      ref={carousel}
      className="space-x-10 overflow-hidden h-full w-[600px] md:w-full flex"
    >
      {children}
    </div>
  );
};

export default Carousel;
