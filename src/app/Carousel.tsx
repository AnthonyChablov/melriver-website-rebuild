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
  selector: string; // Selector for gsap.to() target
}

const Carousel = <T extends HTMLElement>({
  children,
  selector,
}: CarouselProps) => {
  const carousel = useRef();

  useGSAP(
    () => {
      // gsap code here...
      gsap.to(".box", { x: 360 }); // <-- automatically reverted
    },
    { scope: carousel }
  ); // <-- scope is for selector text (optional)

  return <div ref={carousel}>{children}</div>;
};

export default Carousel;
